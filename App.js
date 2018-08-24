import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    const App = () => {
      // //Example 1: Default Parameters
      //console.log("Example 1: Default Parameters");

      // var defaultPerson = {
      //   name: {
      //     first: "Nick",
      //     last: "Nelson"
      //   },
      //   favActivity: "baseball"
      // };
      // function logActivity(p = defaultPerson) {
      //   console.log(`${p.name.first} loves ${p.favActivity}`);
      // }

      //console.log("---------------");

      // //Example 2: Arrow Functions
      // console.log("Example 2: Arrow Functions");
      // const lordify = function(firstname) {
      //   return `${firstname} of Panama`;
      // };

      // console.log(lordify("Trey"));

      // console.log("---------------");

      // //Example 3: Destructive Assignment
      // console.log("Example 3: Destructive");
      // const pizza = {
      //   bread: "hand toss",
      //   meat: "sausage",
      //   cheese: "american",
      //   toppings: ["pineapple", "pepperoni", "olives"]
      // };

      // const { bread, meat } = pizza;
      // console.log(bread, meat);

      // const normHuman = { firstname: "Robert", lastname: "Wilson" };
      // const lordify2 = normHuman => {
      //   const fn = normHuman.firstname;
      //   console.log(`${fn} of Panama`);
      // };
      // lordify2(normHuman);

      // console.log("--------------");

      //Example 4: The Spread Operator
      console.log("Example 4: The Spread Operator");
      const bed = {
        sheet: "blue",
        pillow: "white"
      };
      const comforter = "black and blue";
      const colorsMakingBed = {
        ...bed,
        comforter
      };
      console.log(colorsMakingBed);

      console.log("--------------");

      // console.log("--------------");

      // console.log("--------------");

      // console.log("--------------");

      // console.log("--------------");

      // console.log("--------------");

      // console.log("--------------");

      // console.log("--------------");
    };
    App();

    return (
      <div className="pp">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React kend</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
