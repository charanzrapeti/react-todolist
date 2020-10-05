import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/Indecision";
import "normalize.css/normalize.css";
import "./styles/style.scss";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// class Oldsyntax {
//   constructor() {
//     this.name = "Mike";
//     this.getwish = this.getwish.bind(this);
//   }
//   getwish() {
//     return `Hi ${this.name} `;
//   }
// }

// class Newsyntax {
//   constructor() {
//     this.name = "Mike";
//   }
//   getwish = () => {
//     return `Hi ${this.name}`;
//   };
// }
// const oldsyntax = new Newsyntax();
// const wish = oldsyntax.getwish;
// console.log(wish());
