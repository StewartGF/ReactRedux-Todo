import React from "react";
import { connect, useSelector } from "react-redux";

function Comentarios(todos) {
  const todo = useSelector(state => state.todos); // recibo la información del state
  const todoSeleccionado = useSelector(state => state.seleccionado);
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

  return (
    <div className="container-comentarios">
      <h1>Comentarios</h1>
      {con.map(comentario => (
        <div key={comentario.idComentario} className="comentario-item">
          <div className="descripcion">
            <p className="id"> {comentario.idComentario}</p>
            <p className="texto">{comentario.comentario} </p>
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
