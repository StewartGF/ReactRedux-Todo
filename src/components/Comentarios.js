import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { editarComentario } from "../actions";

function Comentarios(todos) {
  const todo = useSelector(state => state.todos); // recibo la información del state
  const todoSeleccionado = useSelector(state => state.seleccionado);
  const [updateComentario, setUpdateComentario] = useState({
    id: 0,
    comentario: "",
    comentarioID: ""
  });
  const dispatch = useDispatch(); // Hook para usar dispatch

  let comentarios;
  let con;
  if (todo) {
    comentarios = todo
      .filter(todo => todo.id === parseInt(todoSeleccionado.id))
      .map(x => x.mensajes);
    con = [].concat(...comentarios).map(x => ({
      id: x.id,
      comentario: x.comentario,
      idComentario: x.comentarioID
    }));
  }

  //HANDLES
  const handleChange = e => {
    setUpdateComentario({
      id: e.target.id,
      comentario: e.target.value,
      comentarioID: e.target.getAttribute("name")
    });
  };

  return (
    <div className="container-comentarios">
      <h1>Comentarios</h1>
      {con.map(comentario => (
        <div
          key={comentario.idComentario}
          className="comentario-item"
          style={{ marginBottom: "10px" }}
        >
          <div className="descripcion">
            <p className="id"> {comentario.idComentario}</p>
            <p className="texto">{comentario.comentario} </p>
          </div>
          <div>
            <div className="comentarioInputUpdate">
              <input
                id={comentario.id}
                name={comentario.idComentario}
                type="text"
                onChange={handleChange}
              />
            </div>
            <button
              onClick={() => dispatch(editarComentario(updateComentario))}
            >
              Actualizar Comentario
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  const { todos } = state;
  return {
    todos: todos
  };
};

export default connect(mapStateToProps)(Comentarios);
