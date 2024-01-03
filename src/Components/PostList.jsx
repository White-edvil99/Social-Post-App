// const handlefetchclick = () => {
//   console.log("all done");
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((data) => console.log(data.userId));
// };

import Post from "./Post";
import { PList } from "../Store/Postliststore";
import Blankmsg from "./Blankmsg";
import Spinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const plist = useLoaderData();

  return (
    <>
  
      { plist.length === 0 && <Blankmsg />}
      { plist && plist.map((shots) => <Post key={shots.id} shots={shots}></Post>
      )}
    </>
  );
}

  export const postLoader = () => {
    return fetch('https://dummyjson.com/posts/')
      .then((res) => res.json())
      .then((data) => {
         return data.posts
      });
  
    
};
export default PostList;
