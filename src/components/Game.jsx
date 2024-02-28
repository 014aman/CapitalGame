import { useEffect, useState } from "react";
import Score from "./Score";

import data from "../content/data";
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const Game = () => {
  let [count, setCount] = useState(0);
  let [num, setNum] = useState(getRandomInt(0, data.length)); 
  let [correct, setCorrect] = useState("");
  const country = data[num].country;
  const capital = data[num].capital;
  console.log(capital);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const filled = event.target.check.value;
    console.log(capital, filled);
    if (capital.toLowerCase() === filled.toLowerCase() || (capital==null && filled==='')){
      setCount(count + 1);
      setNum(getRandomInt(0, data.length));
      setCorrect("");
    }else {
      let msg = `Correct answer is ${capital}`;
      setCount(0);
      setCorrect("Wrong Answer !!");
    }
  };
  return (
    <>
      <Score count={count} />
      <div className="Game" key={country}>
        <form onSubmit={handleSubmit}>
          <ul className="formData">
            <li key="123">
              <h3>{country}</h3>
            </li>
            <li key="1234">
              <input
                type="text"
                placeholder="Enter Capital"
                name="check"
              ></input>
            </li>
            <li key="1235">
              <button type="submit">Submit</button>
            </li>

            
            <li key="1236">
              <p> {correct} </p>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};
export default Game;
