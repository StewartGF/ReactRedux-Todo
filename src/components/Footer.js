import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

const Footer = () => (
  <div>
    <span>Mostrar: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>Todo</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Activos</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completados
    </FilterLink>
  </div>
);

export default Footer;
