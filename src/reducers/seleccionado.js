const initialState = {
  id: -1
};

const seleccionado = (state = initialState, action) => {
  switch (action.type) {
    case "TODO_SELECCIONADO": {
      return {
        ...state,
        id: action.payload //el Id seleccionado
      };
    }
    default:
      return state;
  }
};

export default seleccionado;
