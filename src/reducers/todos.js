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

    case "EDITAR_COMENTARIO":
      return state.map(todos => {
        return {
          //clono el estado
          ...todos,
          //creo otro array de mensajes
          mensajes: todos.mensajes.map(mensaje => {
            //busco el comentario indicado para actualizar
            if (mensaje.comentarioID === action.payload.comentarioID) {
              return {
                // clono el mensaje
                ...mensaje,
                //cambio el comentario por el comentario nuevo
                comentario: action.payload.comentario
              };
            } else {
              //si no son iguales, retorno el array por defecto
              return { ...mensaje };
            }
          })
        };
      });

    default:
      return state;
  }
};

export default todos;
