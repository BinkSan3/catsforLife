import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

const About = (props) => {
  const [cat, setCat] = useState({});

  const { catId } = useParams();
  useEffect(() => {
    const selectedCat = props.singleCat.find((cat) => catId === cat.id);
    setCat(selectedCat);
  }, []);
  return (
    <>
      <h1>About Page</h1>;
      <img src={cat.url} alt="Cat" />
      <button onClick={() => props.addToCart(cat)}>Add to cart</button>
      <p>Name: {cat.name}</p>
      <p>Age: {cat.age}</p>
      <p>{cat.breed}</p>
      <p>{cat.gender}</p>
      <p>{cat.sign}</p>
      <p>{cat.job}</p>
      <p>£{cat.price}</p>
      <p>
        <em>{cat.county}</em>
      </p>
      <button onClick={() => props.addToCart(cat)}>Add</button>
    </>
  );
};

export default About;
