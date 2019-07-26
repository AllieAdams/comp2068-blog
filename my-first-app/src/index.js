import React from "react";
import ReactDOM from "react-dom";

function Welcome (props) {
    return (
        <div>Hello {props.name}</div>
    );
}

ReactDOM.render(<Welcome name="Allie"/>, document.querySelector("#root"));