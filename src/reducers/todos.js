const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          mensajes: [] //agrego el array con los mensajes
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "ADD_COMENTARIO":
      return state.map(todo =>
        todo.id === parseInt(action.id)
          ? {
              ...todo,
              mensajes: [action.payload, ...todo.mensajes]
            }
          : todo
      );
    case "BORRAR_TODO":
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
};

export default todos;
