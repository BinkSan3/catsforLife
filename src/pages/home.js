const Home = (props) => {
  return (
    <div>
      <h1>Homepage</h1>
      {props.allCats.map((cat, index) => {
        return (
          <div key={index}>
            <img src={cat.url} alt="Cat" />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
