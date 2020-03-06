import React from "react";
export const Pet = ({ name, animal, breed }) => {
  // called destrucuring when you remove the props name and format it within curly brackets
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};
