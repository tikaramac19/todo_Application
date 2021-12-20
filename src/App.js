import "./App.css";
import React from "react";
import { useState } from "react";
import ToDoList from "./toDoList";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([""]);

  const showtext = (event) => {
    setText(event.target.value);
  };

  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, text];
    });

    setText("");
  };

  const deleteItem = () => {
    console.log("deleted items");
  };

  return (
    <>
      <div className="App">
        <div className="centerdiv">
          <h2 className="header">ToDo List</h2>

          <br />

          <input
            type="text"
            placeholder="add a Items"
            value={text}
            onChange={showtext}
          />
          <button onClick={listOfItem} className="bnt">
            {" "}
            +{" "}
          </button>

          <ol>
            {items.map((itemvalue, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  textt={itemvalue}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
