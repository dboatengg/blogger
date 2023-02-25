import { useLocation } from "react-router-dom";

const DisplayPost = () => {
  const location = useLocation();
  const { title, post } = location.state;

  return (
    <div>
      <h1>{title}</h1>
      <p>{post}</p>
    </div>
  );
};
