const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h1", {}, animal),
    React.createElement("h1", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "luna",
      animal: "Dog",
      breed: "Havenese"
    }),
    React.createElement(Pet, {
      name: "pepper",
      animal: "bird",
      breed: "cocktail"
    }),
    React.createElement(Pet, { name: "doink", animal: "cat", breed: "stray" })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
