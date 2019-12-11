import React, { useState } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import { addComentario, todoSeleccionado } from "../actions";
import { connect } from "react-redux";
import uuid from "react-uuid";

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
    // console.log(Comentario);
  };

  const handleSend = () => {
    // console.log(Comentario);
    dispatch(addComentario(Comentario));
  };

  const verComentarios = evento => {
    // dispatch => el evento.target.id en el state del comentario
    dispatch(todoSeleccionado(evento.target.id));
  };
  return (
    <ul>
      {todos.map(todo => (
        <>
          <div className="izqContent" key={todo.id}>
            <Todo {...todo} onClick={() => toggleTodo(todo.id)} />
            <input id={todo.id} type="text" onChange={handleChange} />
            <button onClick={() => handleComentario(todo.id)}>
              Agregar comentario
            </button>
          </div>
          <div className="derContent">
            <button id={todo.id} onClick={verComentarios}>
              Ver comentarios
            </button>
          </div>
        </>
      ))}
    </ul>
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
