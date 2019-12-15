import React, { useState } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import { addComentario, todoSeleccionado, borrarToDo } from "../actions";
import { connect } from "react-redux";
import uuid from "react-uuid";
import Comentarios from "./Comentarios";

function TodoList({ todos, toggleTodo, dispatch }) {
  const [Comentario, setComentario] = useState({
    id: 0,
    comentario: "",
    comentarioID: uuid()
  });

  const handleComentario = _id => {
    setComentario({
      ...Comentario,
      id: _id,
      comentarioID: uuid()
    });
    handleSend();
  };
  const handleChange = e => {
    setComentario({
      ...Comentario,
      id: e.target.id,
      comentario: e.target.value
    });
  };

  const handleSend = () => {
    dispatch(addComentario(Comentario));
  };

  const verComentarios = evento => {
    dispatch(todoSeleccionado(evento.target.id));
  };
  const handleBlur = evento => {
    evento.target.value = "";
  };
  return (
    <>
      <div className="accordion" id="accordionExample">
        {todos.map(todo => (
          <div key={todo.id} className="card">
            <div className="card-header" id="headingOne">
              <div style={{ display: "flex" }}>
                <Todo {...todo} onClick={() => toggleTodo(todo.id)} />

                <div id="botonsito" className="botonesCollapse ">
                  <button
                    id={todo.id}
                    className="btn btnFontSize btn-danger btnCollapseBorrar"
                    onClick={() => dispatch(borrarToDo(todo.id))}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
                <div id="botonsito" className="botonesCollapse">
                  <button
                    id={todo.id}
                    onClick={verComentarios}
                    className="btn btnFontSize btn-info btnCollapseComentarios "
                    data-toggle="collapse"
                    data-target={`#collapse${todo.id}`}
                    aria-expanded="false"
                    aria-controls={`collapse${todo.id}`}
                  >
                    <i
                      id={todo.id}
                      className="far fa-comment-alt"
                      style={{ marginRight: "3px" }}
                    />
                    <span id={todo.id} className="textoSpanOcultar">
                      Ver Comentarios
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div
              id={`collapse${todo.id}`}
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body row mx-auto">
                <div className="col-lg-12">
                  <Comentarios></Comentarios>
                </div>
                <div className="form-group col-lg-6 col-sm-12 mx-auto">
                  <input
                    id={todo.id}
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6 col-sm-12">
                  <button
                    className="btnFontSize btn btn-success rounded-pill mt-1"
                    onClick={() => handleComentario(todo.id)}
                    style={{ float: "left" }}
                  >
                    Agregar comentario
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};
export default connect()(TodoList);
