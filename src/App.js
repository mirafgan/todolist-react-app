/* eslint-disable no-sequences */
import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import Card from "./card";
export default App;
function App() {
  const [todo, setTodo] = useState([]);
  const [uptodo, setupTodo] = useState({
    name: "",
    id: "",
    source: "",
    check: false,
  });
  const needchange = (e) => {
    if (e.target.value !== "") {
      setupTodo({
        name: e.target.value,
        id: nanoid(),
        check: false,
        source: "",
      });
    }
  };
  const fchange = (e, x) => {
    let result = todo
      .filter((item) => item.name === e)
      .map((item) => {
        return (item.source = x), (item.check = !item.check);
      });
    setupTodo(result);
  };
  const bagla = (x) => {
    let result = todo.filter((item) => item.id !== x);
    setTodo(result);
  };
  const both = (x) => {
    uptodo.source = x;
    if (x === "have") uptodo.check = true;
    setTodo([...todo, uptodo]);
  };
  return (
    <div className="todo-box">
      <div>
        <input
          type="text"
          placeholder="Məhsul əlavə edin"
          onChange={needchange}
        />
        <button onClick={() => both("need")}>Alınacaq</button>
        <button onClick={() => both("have")}>Alınıb</button>
      </div>
      <div className="content">
        <h2>Alınacaq:</h2>
        <div className="need">
          {todo
            .filter((item) => item.source === "need")
            .map((item) =>
              item.name !== "" ? (
                <Card
                  {...item}
                  fchange={() => fchange(item.name, "have")}
                  key={item.id}
                  bagla={() => bagla(item.id)}
                />
              ) : (
                ""
              )
            )}
        </div>
        <h2>Alınıb:</h2>
        <div className="have">
          {todo
            .filter((item) => item.source === "have")
            .map((item) =>
              item.name !== "" ? (
                <Card
                  {...item}
                  fchange={() => fchange(item.name, "need")}
                  key={item.id}
                  bagla={() => bagla(item.id)}
                />
              ) : (
                ""
              )
            )}
        </div>
      </div>
    </div>
  );
}
