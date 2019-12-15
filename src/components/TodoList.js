import React, { useState } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import { addComentario, todoSeleccionado, borrarToDo } from "../actions";
import { connect } from "react-redux";
import uuid from "react-uuid";
import Comentarios from "./Comentarios";

// acá agregar el dispatch para agregar un comentario dentro del map tomar el todo.id y el texto del comentario

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
              <div className="card-body">
                <Comentarios></Comentarios>
                <input
                  id={todo.id}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <button
                  className="btnFontSize"
                  onClick={() => handleComentario(todo.id)}
                >
                  Agregar comentario
                </button>
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

// {todos.map(todo => (
//   <div key={todo.id} className="izqContent">
//     <Todo {...todo} onClick={() => toggleTodo(todo.id)} />
//     <input
//       id={todo.id}
//       type="text"
//       onChange={handleChange}
//       onBlur={handleBlur}
//     />
//     <button
//       className="btnFontSize"
//       onClick={() => handleComentario(todo.id)}
//     >
//       Agregar comentario
//     </button>
//     <button
//       id={todo.id}
//       className="btn btnFontSize btn-info "
//       onClick={verComentarios}
//       style={{ margin: "3px" }}
//     >
//       <i class="far fa-comment-alt"></i> Ver Comentarios
//     </button>
//     <button
//       id={todo.id}
//       className="btn btnFontSize btn-danger"
//       style={{ margin: "3px" }}
//       onClick={() => dispatch(borrarToDo(todo.id))}
//     >
//       <i class="fas fa-trash-alt"></i>
//     </button>
//   </div>
// ))}
