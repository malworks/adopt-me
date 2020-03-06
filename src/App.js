import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Cairo",
      animal: "cat",
      breed: "Sphynx"
    }),
    React.createElement(Pet, {
      name: "Odie",
      animal: "dog",
      breed: "Island mutt"
    }),
    React.createElement(Pet, {
      name: "Toast",
      animal: "cat",
      breed: "Domestic Shorthair"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
