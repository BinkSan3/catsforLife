import { faker } from "@faker-js/faker";

import { useState } from "react";
const Home = (props) => {
  const [basket, setBasket] = useState([]);

  const toggleBasket = () => {
    setBasket(!basket);
  };

  return (
    <div>
      <h1>Homepage</h1>
      {props.allCats.map((cat, index) => {
        return (
          <div key={index}>
            <img src={cat.url} alt="Cat" />
            <button onClick={toggleBasket}>Add to Basket</button>
            <p>Name: {cat.name}</p>
            <p>age: {cat.age}</p>
            <p>{cat.gender}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
