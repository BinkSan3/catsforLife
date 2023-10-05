import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ReactModal } from "react-modal";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Home from "./pages/home";
import About from "./pages/about";
import Cart from "./components/Cart";

const App = () => {
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=10"
        );
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();

        const catsNames = data.map((cat) => {
          const catGender = faker.person.sexType();
          return {
            ...cat,
            gender: catGender,
            name: `${faker.person.firstName(
              catGender
            )} ${faker.person.lastName()}`,
            age: faker.number.int({ max: 20 }),

            breed: faker.animal.cat(),
            price: faker.number.int({ max: 500 }),
            sign: faker.person.zodiacSign(),
            job: faker.person.jobType(),

            county: faker.location.county(),
          };
        });

        setCats(catsNames);
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

  const addToCart = (cat) => {
    setCart([...cart, cat]);
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Home allCats={cats} addToCart={addToCart} />}
        ></Route>
        <Route
          path="/about/:catId"
          element={<About singleCat={cats} />}
        ></Route>
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
      <div></div>
    </BrowserRouter>
  );
};

export default App;
