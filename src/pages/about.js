import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import styled from "styled-components";

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
      <CatProfile>
        <ImageHolder>
          <CatImage src={cat.url} alt="Cat" />
          <AtcButton onClick={() => props.addToCart(cat)}>
            Add to cart
          </AtcButton>
        </ImageHolder>
        <CatInfo>
          <p>Name: {cat.name}</p>
          <p>Age: {cat.age}</p>
          <p>{cat.gender}</p>
          <p>Breed: {cat.breed}</p>
          <p>Star sign: {cat.sign}</p>
          <p>Past Job title: {cat.job}</p>
          <p>£{cat.price}</p>
          <p>
            <em>{cat.county}</em>
          </p>
        </CatInfo>
      </CatProfile>
    </>
  );
};

export default About;

const CatProfile = styled.div`
  display: flex;
`;

const ImageHolder = styled.image`
  position: relative;
  display: inline-block;
  margin: 20px;
`;

const CatImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
`;

const AtcButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const CatInfo = styled.div`
  margin: 20px;
  background-color: rgba(255 221 238);

  height: 400px;
  width: 400px;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
`;
