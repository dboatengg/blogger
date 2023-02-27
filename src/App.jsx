import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import SinglePost from "./pages/SinglePost";
import NotFound from "./pages/NotFound";
import "./tailwind.css";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="blog" element={<Blog isAuth={isAuth} />} />
        <Route path="/posts/:postId" element={<SinglePost />} />
        <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
