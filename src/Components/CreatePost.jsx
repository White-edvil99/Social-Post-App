import { redirect , Form} from "react-router-dom";


const CreatePost = () => {

    return (
      <>
        <Form method="POST" className="createpost">
          <div className="row mb-3">
            <label htmlFor="image" className="col-sm-2 col-form-label">
              Image/post
            </label>
            <div className="col-sm-10">
              <input
                name="postimage"
                type="file"
                className="form-control"
                id="image"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="Userid" className="col-sm-2 col-form-label">
              User Id
            </label>
            <div className="col-sm-10">
              <input
                name= "postuserid"
                type="text"
                className="form-control"
                id="Userid"
                placeholder="mention your id"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="title" className="col-sm-2 col-form-label">
              Post Title
            </label>
            <div className="col-sm-10">
              <input
                name="posttitle"
                type="text"
                className="form-control"
                id="title"
                placeholder="Title your post"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="body" className="col-sm-2 col-form-label">
              Post Content
            </label>
            <textarea
              rows="4"
              name="postbody"
              type="text"
              className="form-control"
              id="body"
              placeholder="Tell us more aboutey....."
            />
          </div>
          <div className="row mb-3">
            <label htmlFor="reactions" className="col-sm-2 col-form-label">
              Reactions
            </label>
            <div className="col-sm-10">
              <input
                name="postreactions"
                type="text"
                className="form-control"
                id="reactions"
                placeholder="React here..."
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="tags" className="col-sm-2 col-form-label">
              Tags
            </label>
            <div className="col-sm-10">
              <input
                name="posttags"
                type="text"
                className="form-control"
                id="tags"
                placeholder="suggest tags"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </Form>
      </>
    );
  };

  export const createpostAction =  async(data) => {
   const formData = await data.request.formData();
   const postData = Object.fromEntries(formData);
  //  postData.tags = postData.tags.split(" ");
   console.log(postData)

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: {"Content-type": "application/json; charset=UTF-8",},
      body: JSON.stringify(postData),
      })

      .then((response) => response.json())
      .then((post) => {
       console.log(post)
      });

    return redirect("/");
  };

export default CreatePost;
