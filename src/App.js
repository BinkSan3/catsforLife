import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";

import { useEffect, useState } from "react";

const App = () => {
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=10"
        );
        console.log(response);
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();
        setCats(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchCats();
  }, []);
  if (error !== null) {
    return <h1>{error}</h1>;
  }
  console.log(cats);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home allCats={cats} />}></Route>
        <Route path="/about/:catId" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
