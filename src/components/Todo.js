import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text }) => (
  <div
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
      width: "50%",
      verticalAlign: "middle !important",
      textAlign: "center"
    }}
  >
    <span role="img" aria-label="blue-diamond">
      🔹
    </span>{" "}
    {text}
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
