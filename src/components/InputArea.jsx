import React from "react";

function InputArea(props) {
    return (
      <div className="form">
        <input onChange={props.onChangeListener} type="text" value={props.value} />
        <button onClick={props.onClickListener}>
          <span>Add</span>
        </button>
      </div>
    )
}

export default InputArea;