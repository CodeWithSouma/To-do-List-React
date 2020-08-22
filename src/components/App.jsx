import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    
  }

  // this function tigger when list item clicked 
  function deleteItem(id) {
    setItems((prevItems) => {
      // tis code construct a new array that array not content selected item
      return prevItems.filter(function(item,index){
        return index!==id;
      });
      
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onAdd={addItem}
      />
      <div>
        <ul>
          {items.map((todoItem,index) => (
            <ToDoItem 
            key = {index}
            id = {index}
            text={todoItem}
            onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
