import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  const style = {
    container: `h-[90vh] flex items-center justify-center`,
    content: `flex flex-col gap-5 items-center`,
    button: `bg-red-400 px-4 py-2 shadow-md`,
    title: `text-4xl max-w-[500px] mx-auto text-center w-[90%]`,
  };
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>Sign In With Google to continue</h2>
        <button className={style.button} onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
