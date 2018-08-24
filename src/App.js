import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    const App = () => {
      //Example 1: Default Parameters
      console.log("Example 1: Default Parameters");
      console.log("No parameters provided. Use default:");
      logActivity();

      function logActivity(name = "Peter Pan", activity = "flying") {
        console.log(`${name} loves ${activity}`);
      }

      console.log("---------------");

      //Example 2: Arrow Functions
      console.log("Example 2: Arrow Functions");
      console.log("lordify is an arrow function");
      const lordify = function(firstname) {
        return `${firstname} of Panama`;
      };

      console.log(lordify("Trey"));

      console.log("---------------");

      //Example 3: Destructive Assignment
      console.log("Example 3: Destructive");
      const pizza = {
        bread: "hand toss",
        meat: "sausage",
        cheese: "american",
        toppings: ["pineapple", "pepperoni", "olives"]
      };

      const { bread, meat } = pizza;
      console.log(bread, meat);

      const normHuman = { firstname: "Robert", lastname: "Wilson" };
      const lordify2 = normHuman => {
        const fn = normHuman.firstname;
        console.log(`${fn} of Panama`);
      };
      lordify2(normHuman);

      console.log("--------------");

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

      // //Example 5: Promises
      // console.log("Promises");
      // const getFakeMembers = count =>
      //   new Promise((resolves, rejects) => {
      //     const api = `https://api.randomuser.me/?nat=US&results=${count}`;
      //     const request = new XMLHttpRequest();
      //     request.open("GET", api);
      //     request.onload = () =>
      //       request.status === 200
      //         ? resolves(JSON.parse(request.response).results)
      //         : rejects(Error(request.statusText));
      //     request.onerror = err => rejects(err);
      //     request.send();
      //   });

      // ggetFakeMembers(5).then(
      //   members => console.log(members),
      //   err =>
      //     console.error(new Error("cannot load members from randomuser.me"))
      // );

      console.log("--------------");

      //Example 6: Object.assign
      console.log("Example 6: Object.assign");
      const car = {
        make: "Toyota",
        year: 2001
      };
      const newCar = Object.assign({}, car, {
        year: 2007
      });

      console.log(
        newCar === car ? "newCar is equal to car" : "newCar is not equal to car"
      );
      console.log(car);
      console.log(newCar);

      console.log("--------------");

      //Example 7: The Spread Operator
      console.log("Example 7: The Spread Operator");
      const player = {
        name: "David",
        jersey: 21
      };

      const newPlayer = {
        ...player,
        jersey: 10
      };
      console.log(
        newPlayer === player
          ? "newPlayer is equal to student"
          : "newPlayer is not equal to student"
      );
      console.log(player);
      console.log(newPlayer);

      console.log("--------------");

      //Example 8: Array.filer
      console.log("Example 8: Array.filer");
      const characters = ["Tim", "Kate", "Sinbad"];

      const withoutTim = characters.filter(char => char !== "Tim");
      console.log(characters);
      console.log(withoutTim);

      console.log("--------------");

      //Example: 9 Array.map
      console.log("Example 9: Array.map");
      const largeLetters = characters.map(char => char.toUpperCase());
      console.log(characters);
      console.log(largeLetters);

      console.log("--------------");

      //Example 10: Array.slice
      console.log("Example 10: Array.slice");
      const rerangeChar = characters.slice().sort();
      console.log(
        rerangeChar === characters
          ? "rerangeChar is equal to characters"
          : "rerangeChar is not equal to characters"
      );
      console.log(`regular: ${characters}`);
      console.log(`regular: ${rerangeChar}`);

      console.log("--------------");

      //Example 11: Array.reduce
      console.log("Example 11: Array.reduce");
      const nums = [10, 55, 43, 78, 90, 22, 37];
      const maxNum = nums.reduce((max, num) => {
        console.log(`${num} > ${max} = ${num > max}`);
        if (num > max) {
          return num;
        } else {
          return max;
        }
      }, 0);
      console.log("maxNum", maxNum);

      console.log("--------------");
    };
    App();

    return (
      <div className="pp">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
