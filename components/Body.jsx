import { useState } from "react";
import "./styleCss/style.css";
import Game from "./Game";
const Body = () => {
  return (
    <div className="container-box">
      <div className="centered-box">

      <Game />
      </div>
    </div>
  );
};
export default Body;
