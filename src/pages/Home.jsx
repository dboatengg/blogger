import React from "react";

const Home = () => {
  const style = {
    container: `h-[90vh] flex items-center justify-center`,
    title: `text-4xl`,
  };
  return (
    <div className={style.container}>
      <h1 className={style.title}>Welcome Home</h1>
    </div>
  );
};

export default Home;
