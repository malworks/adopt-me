const Pet = ({ name, animal, breed }) => { // called destrucuring when you remove the props name and format it within curly brackets
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        [
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
        ]
    );
}   

ReactDOM.render(
    React.createElement(App), 
    document.getElementById("root")
);