import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import seleccionado from "./seleccionado";

export default combineReducers({
  todos,
  visibilityFilter,
  seleccionado
});
