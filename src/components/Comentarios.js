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
  //cambiar el display
  const [isParrafoDisplayed, setIsParrafoDisplayed] = useState(true);
  const [isAreaDisplayed, setIsAreaDisplayed] = useState(false);
  //cambiar el display

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
  const handleBotonToggle = () => {
    setIsParrafoDisplayed(!isParrafoDisplayed);
    setIsAreaDisplayed(!isAreaDisplayed);
  };

  const handleBotonActualizar = () => {
    dispatch(editarComentario(updateComentario));
    setIsAreaDisplayed(!isAreaDisplayed);
    setIsParrafoDisplayed(!isParrafoDisplayed);
  };
  return (
    <div className="container-comentarios">
      {con.map(comentario => (
        <div
          key={comentario.idComentario}
          className="card comentario-item"
          style={{ marginBottom: "10px" }}
        >
          <div className="card-body descripcion ">
            <div className="cardIzquierda ">
              <p
                style={{ display: isParrafoDisplayed ? "block" : "none" }}
                className="texto"
              >
                <span role="img" aria-label="orange-diamond">
                  🔸
                </span>{" "}
                {comentario.comentario}
              </p>
              <textarea
                id={comentario.id}
                name={comentario.idComentario}
                className="form-control tArea"
                type="text"
                onChange={handleChange}
                style={{
                  display: isAreaDisplayed ? "block" : "none"
                }}
              >
                {comentario.comentario}
              </textarea>
            </div>
            <div className="botonesCollapse ">
              <button
                className="btn btn-warning btnFontSize btnCollapseEditar"
                style={{
                  color: "white",
                  display: isParrafoDisplayed ? "block" : "none"
                }}
                onClick={handleBotonToggle}
              >
                <i id={comentario.id} className="fas fa-edit"></i>
                <span id={comentario.id} className="textoSpanOcultar">
                  Editar Comentario
                </span>
              </button>
              <button
                className="btn btn-success btnFontSize btnCollapseActualizar"
                style={{
                  color: "white",
                  display: isAreaDisplayed ? "block" : "none"
                }}
                onClick={handleBotonActualizar}
              >
                <i id={comentario.id} className="fas fa-edit"></i>
                <span id={comentario.id} className="textoSpanOcultar">
                  Actualizar
                </span>
              </button>
            </div>
            <div className="botonesCollapse ">
              <button
                className="btn btn-danger btnFontSize btnCollapseCancelar"
                style={{
                  color: "white",
                  display: isAreaDisplayed ? "block" : "none"
                }}
                onClick={handleBotonToggle}
              >
                <i id={comentario.id} className="fas fa-times-circle"></i>
                <span id={comentario.id} className="textoSpanOcultar">
                  Cancelar
                </span>
              </button>
            </div>
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
