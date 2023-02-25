import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  let navigate = useNavigate();
  const colRef = collection(db, "posts");
  const createPost = async (e) => {
    e.preventDefault();
    await addDoc(colRef, {
      title,
      post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    }).catch((error) => console.log(error));
    navigate("/blog");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, []);

  const style = {
    container: `h-[90vh] w-full flex items-center justify-center max-w-[500px] mx-auto`,
    content: `bg-emerald-600 p-4 w-full max-w-[400px] rounded-md`,
    heading: `text-4xl mb-5 text-center`,
    form: `flex flex-col gap-5`,
    title: ``,
    titleInput: `w-full outline-none p-2 rounded-sm`,
    postField: `w-full outline-none px-2 py-3 h-[150px] resize-none rounded-sm`,
    button: `bg-green-900 text-white p-2 rounded-sm`,
  };
  return (
    <div>
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.heading}>Create A Post</h1>
          <form className={style.form} onSubmit={createPost}>
            <label htmlFor="title">
              <p>Title</p>
              <input
                type="text"
                name="title"
                required
                placeholder="title"
                className={style.titleInput}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </label>
            <label htmlFor="post">
              <p>Title</p>
              <textarea
                name="post"
                placeholder="Post..."
                required
                className={style.postField}
                onChange={(e) => {
                  setPost(e.target.value);
                }}
              ></textarea>
            </label>
            <button className={style.button}>Submit Post</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
