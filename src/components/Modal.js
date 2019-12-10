import React, { useState } from "react";
import { addComentario } from "../actions";

export default function Modal(id, dispatch) {
  let comentarioID = 0;
  const [texto, setTexto] = useState({
    value: ""
  });
  const [comentario, setComentario] = {
    id: id,
    comentario: texto,
    comentarioID: comentarioID++
  };

  const handleChange = e => {
    setTexto({ ...texto, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault(); // para que no recargue la página
    dispatch(addComentario(comentario));
  };

  return (
    <div className="modal">
      <div className="modal-background"></div>
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            onChange={handleChange}
            value={texto.value}
          />
          <button type="submit"></button>
        </form>
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  );
}
