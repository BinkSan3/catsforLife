import { faker } from "@faker-js/faker";
import { useState } from "react";
import { Link } from "react-router-dom/dist";

const Home = (props) => {
  return (
    <div>
      <h1>Homepage</h1>
      {props.allCats.map((cat, index) => {
        return (
          <div key={index}>
            <Link to={`./about/${cat.id}`}>
              <img src={cat.url} alt="Cat" />
            </Link>

            <p>Name: {cat.name}</p>

            <p>£{cat.price}</p>
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
