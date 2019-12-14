let nextTodoId = 1;

export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export const addComentario = comentario => ({
  type: "ADD_COMENTARIO",
  id: comentario.id,
  payload: comentario
});

//Action para guardar en el state el Todo Seleccionado para ver los comentarios

export const todoSeleccionado = id => ({
  type: "TODO_SELECCIONADO",
  payload: id
});

export const borrarToDo = id => ({
  type: "BORRAR_TODO",
  payload: id
});

export const editarComentario = comentario => ({
  type: "EDITAR_COMENTARIO",
  payload: comentario //trae id y  el comentario
});
