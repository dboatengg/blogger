import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import spinner from "../assets/spinner.gif";
import ReactMarkdown from "react-markdown";

const SinglePost = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  const style = {
    container: `max-w-[800px] w-[80%] mx-auto my-[40px] md:w-[90%]`,
    title: `text-4xl font-medium mb-4 md:text-3xl text-[#333]`,
    spinner: `w-[50px] sm:w-[30px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`,
    author: `mt-7`,
  };

  useEffect(() => {
    const fetchPost = async () => {
      const postDoc = doc(db, "posts", postId);
      const postSnapshot = await getDoc(postDoc);
      if (postSnapshot.exists()) {
        setPost(postSnapshot.data());
      } else {
        console.log("No such post!");
      }
    };
    fetchPost();
  }, [postId]);

  if (!post) {
    return <img className={style.spinner} src={spinner} alt="Loading..." />;
  }

  return (
    <div className={style.container}>
      <h2 className={style.title}>{post.title}</h2>
      <ReactMarkdown className="markdown">{post.post}</ReactMarkdown>
      <p className={`${style.author} author`}>Post by: {post.author.name}</p>
    </div>
  );
};

export default SinglePost;
