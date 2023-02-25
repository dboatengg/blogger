import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = ({ isAuth, setIsAuth }) => {
  const style = {
    nav: `bg-slate-400 w-full h-[10vh] flex items-center justify-center gap-5`,
  };

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <nav className={style.nav}>
      <Link to="/">Home</Link>
      <Link to="blog">Blog</Link>
      {isAuth ? (
        <>
          <button onClick={signUserOut}>Logout</button>
          <Link to="/createpost">Create Post</Link>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
