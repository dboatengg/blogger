import { useState, useEffect } from "react";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { Link } from "react-router-dom";
import { SlTrash } from "react-icons/sl";
import spinner from "../assets/spinner.gif";
import useOffline from "../components/useOffline";

const Blog = ({ isAuth }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //useOffline custom hook
  const { online, setOffline } = useOffline();
  const colRef = collection(db, "posts");

  useEffect(() => {
    const q = query(colRef, orderBy("createdAt", "desc"));
    const getPosts = async () => {
      const data = await getDocs(q);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    };
    getPosts();
  }, []);

  const style = {
    container: `flex justify-start flex-col items-center w-[80%] max-w-[800px] mx-auto sm:w-[90%]`,
    title: `text-4xl my-4`,
    posts: `flex flex-col gap-[10px]`,
    post: `px-2 py-4 flex flex-col gap-2`,
    postText: `post-text-display`,
    postTitle: `text-2xl font-semibold w-[80%] sm:text-[18px] sm: w-[90%] md:text-[22px]`,
    postHeader: `flex items-center justify-between `,
    deleteBtn: `cursor-pointer`,
    trashIcon: `text-2xl sm:text-[20px]`,
    spinner: `w-[50px] sm:w-[30px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`,
  };

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className={`${style.container} blog`}>
      {/* detect and notify users if they are offline: Posts cannot load offline */}
      {!online ? setOffline : ""}

      <h1 className={style.title}>Blog</h1>
      {isLoading ? (
        <img className={style.spinner} src={spinner} alt="Loading..." />
      ) : (
        <div className={style.posts}>
          {posts.map((post) => {
            return (
              <div className={style.post} key={post.id}>
                <div className={style.postHeader}>
                  <Link to={`/posts/${post.id}`} className={style.postTitle}>
                    {post.title}
                  </Link>
                  {isAuth && post.author.id === auth.currentUser.uid && (
                    <div
                      title="delete post"
                      onClick={() => {
                        deletePost(post.id);
                      }}
                      className={style.deleteBtn}
                    >
                      <SlTrash className={style.trashIcon} />
                    </div>
                  )}
                </div>
                <p className={style.postText}>{post.post}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Blog;
