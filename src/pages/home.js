import { faker } from "@faker-js/faker";
import { useState } from "react";

const Home = (props) => {
  return (
    <div>
      <h1>Homepage</h1>
      {props.allCats.map((cat, index) => {
        return (
          <div key={index}>
            <img src={cat.url} alt="Cat" />
            <p>Name: {cat.name}</p>
            <p>Age: {cat.age}</p>
            <p>Gender: {cat.gender}</p>
            <p>{cat.width}</p>
            <button onClick={() => props.addToCart(cat)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
