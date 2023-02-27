import { Link } from "react-router-dom";

const NotFound = () => {
  const style = {
    container: `h-screen w-full flex flex-col items-center justify-center`,
    title: `text-3xl font-bold`,
    home: `text-[#333] underline`,
  };
  return (
    <div className={style.container}>
      <h1 className={style.title}>Page Not Found</h1>
      <Link className={style.home} to="/">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
