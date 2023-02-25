import { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { Link } from "react-router-dom";

const Blog = ({ isAuth }) => {
  const [posts, setPosts] = useState([]);
  const colRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(colRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const style = {
    container: `h-[90vh] flex justify-start flex-col items-center w-[80%] max-w-[700px] mx-auto`,
    title: `text-4xl my-4`,
    posts: `flex flex-col gap-[30px]`,
    post: `h-[150px] overflow-hidden px-2 py-4 flex flex-col gap-2`,
    postTitle: `text-3xl w-[80%]`,
    postHeader: `flex items-center justify-between `,
    deleteBtn: `cursor-pointer`,
  };

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Blog</h1>
      <div className={style.posts}>
        {posts.map((post) => {
          return (
            <div className={style.post} key={post.id}>
              <div className={style.postHeader}>
                <Link
                  to={`/displaypost/${post.id}`}
                  className={style.postTitle}
                >
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
                    &#128465;
                  </div>
                )}
              </div>
              <p>{post.post}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
