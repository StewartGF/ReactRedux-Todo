import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        {/* <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button> */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Agregar ToDo"
            aria-describedby="button-addon2"
            ref={node => (input = node)}
          />
          <div className="input-group-append">
            <button
              className="btn btnFontSize btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              <i
                className="fas fa-plus iconoAgregar"
                style={{ margin: "2px" }}
              ></i>
              <span className="textoAgregar">AGREGAR</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
