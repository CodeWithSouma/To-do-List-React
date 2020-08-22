import React from "react";
// {textDecoration:"line-through solid #fdcb6e"}
function ToDoItem(props) {

 return (
     <div>
     {/* this on click method call a function
      that function call another function  with passing id/index
      no N:B props.onChecked is a function that we pass from app 
      when onClicked tigger then onClicked called annamous function/ arrow function
      and then arrow function call onChecked function and pass argument id that is nothing but index 
      no of this list item.*/}
         <li onClick={()=>{
             props.onChecked(props.id);
         }}>
         {props.text}</li>
     </div>
  )
}

export default ToDoItem;