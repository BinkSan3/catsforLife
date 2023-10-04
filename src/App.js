import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";

import { useEffect, useState } from "react";

const App = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );

      const data = await response.json();
      setCats(data);
    };
    console.log(cats);
    fetchCats();
  }, []);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home allCats={cats} />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
