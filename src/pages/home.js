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
            <p>{cat.gender}</p>
            <p>{cat.width}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
