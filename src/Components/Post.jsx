import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PList } from "../Store/Postliststore";

const Post = ({ shots }) => {

  const { delpost } = useContext(PList);
  
  
  return (
    <>
      <div className="card stylepost" style={{ width: "30rem" }}>
        <img
          src={shots.image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {shots.title}
            <span onClick={()=>delpost(shots.id)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              <MdDeleteForever className="btns" />
            </span>
          </h5>
          <p className="card-text">{shots.body}</p>
          {shots.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hastag">{tag}</span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            This post has been reacted by {shots.reactions} people
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
