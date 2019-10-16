import React from "react";
import { render } from "react-dom"
import Pet from "./Pet";

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

render(React.createElement(App), document.getElementById("root"));
