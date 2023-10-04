import { faker } from "@faker-js/faker";

const Home = (props) => {
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
          </div>
        );
      })}
    </div>
  );
};

export default Home;
