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
          </div>
        );
      })}
    </div>
  );
};

export default Home;
