import { Link } from "react-router-dom/dist";
import styled from "styled-components";
import "./home.css";

const Home = (props) => {
  return (
    <div>
      <h1>Cats 4 Lyf!</h1>
      {props.allCats.map((cat, index) => {
        return (
          <div className="catGrid" key={index}>
            <Link to={`./about/${cat.id}`}>
              <div id="imgHolder">
                <img className="catImage" src={cat.url} alt="Cat" />
                <button onClick={() => props.addToCart(cat)}>
                  Add to cart
                </button>
              </div>
            </Link>
            <div className="catInfo">
              <p>Name: {cat.name}</p>

              <p>£{cat.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
