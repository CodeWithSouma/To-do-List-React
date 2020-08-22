import React ,{useState}from "react";

function ToDoItem(props) {

    const [isChecked,setChaked] = useState(false);
    function handleClick() {
        setChaked(isChecked ? false : true);
    }

 return (<li onClick={handleClick}
         style={isChecked? {textDecoration:"line-through solid #fdcb6e"}:{textDecoration:"none"}}>
         {props.text}</li> )
}

export default ToDoItem;