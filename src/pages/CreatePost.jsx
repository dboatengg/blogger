import { useState, useEffect } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState();

  let navigate = useNavigate();
  const colRef = collection(db, "posts");
  const createPost = async (e) => {
    e.preventDefault();
    await addDoc(colRef, {
      title,
      post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      createdAt: serverTimestamp(),
    }).catch((error) => console.log(error));
    navigate("/blog");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, []);

  const style = {
    container: `w-full`,
    content: `w-[80%] mx-auto md:w-[90%]`,
    heading: `text-center text-3xl my-4`,
    button: `bg-green-900 text-white p-2 rounded-sm`,
  };
  return (
    <div>
      <div className={`${style.container} createpost`}>
        <div className={`${style.content} createpost__content`}>
          <h1 className={style.heading}>Create A Post</h1>
          <form
            className={`${style.form} createpost__form`}
            onSubmit={createPost}
          >
            <input
              className="createpost__title"
              type="text"
              name="title"
              required
              placeholder="Title here..."
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <textarea
              className="createpost__post"
              name="post"
              placeholder="Write your post in markdown format..."
              required
              value={post}
              onChange={(e) => {
                setPost(e.target.value);
              }}
            ></textarea>

            <button className={`${style.button} createpost__button`}>
              Submit Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
