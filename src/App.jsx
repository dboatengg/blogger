import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import DisplayPost from "./pages/DisplayPost";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="blog" element={<Blog isAuth={isAuth} />} />
        <Route path="/displaypost" element={<DisplayPost />} />
        <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
