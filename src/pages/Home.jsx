import React from "react";

const Home = () => {
  const style = {
    container: `h-[90vh] flex items-center justify-center flex-col gap-5 max-w-[400px] w-[90%] mx-auto text-center`,
    title: `text-4xl sm:text-3xl`,
  };
  return (
    <div className={style.container}>
      <h1 className={style.title}>Welcome To Blogger!</h1>
      <p>
        Blogger is a platform that allows you create, view, and delete blog
        posts.
      </p>
    </div>
  );
};

export default Home;
