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
        const randomName = faker.person.fullName();
        const randomPrice = faker.commerce.price();
        return (
          <div key={index}>
            <img src={cat.url} alt="Cat" />
            <p>{randomName}</p>
            <p>£{randomPrice}</p>
            <button onClick={toggleBasket}>Add to Basket</button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
