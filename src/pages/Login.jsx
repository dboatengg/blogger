import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/blog");
    });
  };

  const style = {
    container: `h-[90vh] flex items-center justify-center w-[90%] mx-auto`,
    content: `flex flex-col gap-5 items-center`,
    button: `bg-green-200 transition duration-300 ease-in-out px-6 py-3 shadow-lg flex items-center gap-2 sm:px-4 sm:py-2 hover:shadow-md hover:bg-green-300`,
    title: `text-4xl max-w-[500px] mx-auto text-center w-[90%] sm:text-2xl`,
    googleIcon: `text-3xl sm:text-2xl`,
  };
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>Sign In With Google to continue</h2>
        <button className={style.button} onClick={signInWithGoogle}>
          <FcGoogle className={style.googleIcon} />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
