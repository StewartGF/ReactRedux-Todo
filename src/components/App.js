import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import "../App.css";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const App = () => (
  <div className="centered-content">
    <div className="container-todos">
      <div className="sideMenu">
        <SimpleBar
          data-simplebar-auto-hide="false"
          style={{ maxHeight: "95%" }}
        >
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </SimpleBar>
      </div>
      <div className="rightMenu"></div>
    </div>
  </div>
);

export default App;
