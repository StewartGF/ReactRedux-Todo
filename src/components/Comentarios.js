import React from "react";
import { connect, useSelector } from "react-redux";

function Comentarios(todos) {
  const todo = useSelector(state => state.todos);
  const todoSeleccionado = useSelector(state => state.seleccionado);
  let comentarios;
  let con;
  if (todo) {
    comentarios = todo
      .filter(todo => todo.id === parseInt(todoSeleccionado.id))
      .map(x => x.mensajes);
    con = []
      .concat(...comentarios)
      .map(x => ({ id: x.comentarioID, comentario: x.comentario }));
    console.log(con);
  }
  // traer todos los todo y después mapear para encontrar el del ID
  return (
    <div className="container-comentarios">
      <h1>Comentarios</h1>
      {con.map(comentario => (
        <div key={comentario.id} className="comentario-item">
          <div className="descripcion">
            <p className="id"> {comentario.id}</p>
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
