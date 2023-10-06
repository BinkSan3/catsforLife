import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Home from "./pages/home";
import About from "./pages/about";
import CartModal from "./components/Cart";

import shoppingCartIcon from "./assets/shoppingCart.svg";

const App = () => {
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
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
            bought: false,
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

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // const toggleCatCartButton = (cat) => {
  //   cat.bought = !cat.bought;
  //   console.log(cat.bought);
  //   if (cat.bought == true) {
  //     setCart([...cart]);
  //   }
  // };


  const addToCart = (catToAdd) => {
    if (catToAdd.bought === false) {
      catToAdd.bought = true;
      setCart([...cart, catToAdd]);
    } else {
      setCart(cart);
    }
  };

  const removeFromCart = (catToRemove, index) => {
    let storedCart = [...cart];
    storedCart.splice(index, 1);
    setCart(storedCart);
    catToRemove.bought = false;
  };

  const checkout = (removeAll) => {
    let storedCats = [...cats].map((element) => {
      return { ...element, bought: false };
    });
    console.log(storedCats);
    setCats(storedCats);
    let storedCart = [...cart];
    storedCart.splice(0, removeAll.length);
    setCart(storedCart);

  };

  // const removeFromCart = (catToRemove) => {
  //   const updatedCart = cart.filter((cat) => cat.id !== catToRemove.id);
  //   setCart(updatedCart);
  // };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>

        <button onClick={openModal}>
          {" "}
          <img src={shoppingCartIcon} alt="cart icon" />({cart.length})
        </button>

        <CartModal
          isOpen={isModalOpen}
          onClose={closeModal}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cart={cart}
          checkout={checkout}
        />
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              allCats={cats}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cart={cart}
            />
          }
        ></Route>
        <Route
          path="/about/:catId"
          element={
            <About
              singleCat={cats}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cart={cart}
            />
          }
        ></Route>
      </Routes>
      <div></div>
    </BrowserRouter>
  );
};

export default App;
