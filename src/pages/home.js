import { Link } from "react-router-dom/dist";
import "./home.css";

const Home = (props) => {
  return (
    <div>
      <h1>Cats 4 Lyf!</h1>
      {props.allCats.map((cat, index) => {
        return (
          <div className="catGrid" key={index}>
            <Link to={`./about/${cat.id}`}>
              <img className="catImage" src={cat.url} alt="Cat" />
            </Link>

            <p>Name: {cat.name}</p>
            <button onClick={() => props.addToCart(cat)}>Add</button>
            <p>£{cat.price}</p>
            <p>Age: {cat.age}</p>
            <p>Gender: {cat.gender}</p>
            <p>{cat.width}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
