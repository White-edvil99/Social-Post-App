import { createContext, useEffect, useCallback, useState, useReducer } from "react";

export const PList = createContext({
  plist: [],
  addpost: () => {},
  delpost: () => {},
});

const PostlistReducer = (currentpostlist, action) => {
  let newpostlist = currentpostlist;
  if (action.type === "DELETE_POST") {
    newpostlist = currentpostlist.filter(
      (shots) => shots.id !== action.payload.postId
    );
  }

  else if(action.type == "ADD_FETCHPOST"){
    newpostlist = action.payload.fetchpost;
  }
  
  else if(action.type === "ADD_POST"){
    newpostlist =[action.payload, [...currentpostlist]]
  }
  return newpostlist;
};


const PostListProvider = ({ children }) => {
  const [plist, dispatchplist] = useReducer(PostlistReducer, []);


   const addpost = (post) => {
    console.log('add post is called ', post)
    dispatchplist({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addfetchpost = (fetchpost) => {
    dispatchplist({
      type: "ADD_FETCHPOST",
      payload: {
        fetchpost,
      },
    });
  };

  const delpost = useCallback((postId) => {
    dispatchplist({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  }, [dispatchplist]);

  

  return (
    <PList.Provider value={{ plist, addpost, delpost  }}>
      {children}
    </PList.Provider>
  );
};



export default PostListProvider;
