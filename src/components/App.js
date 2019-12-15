import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import "../App.css";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Comentarios from "./Comentarios";
import uuid from "react-uuid";

const App = () => {
  return (
    <div key={uuid()} className="centered-content">
      <a href="#" class="float">
        <i class="fa fa-plus my-float"></i>
      </a>
      <div className="container-todos row">
        <div className="sideMenu col-lg-12 col-sm-12">
          <SimpleBar style={{ maxHeight: "95%" }} autoHide={false}>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
          </SimpleBar>
        </div>
        {/* <div className="rightMenu col-lg-6 col-sm-12">
          <Comentarios></Comentarios>
        </div> */}
      </div>
    </div>
  );
};
export default App;
