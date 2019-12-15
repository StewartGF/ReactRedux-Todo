import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import "../App.css";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import uuid from "react-uuid";

const App = () => {
  return (
    <div key={uuid()} className="centered-content">
      <div className="container-todos row">
        <div className="sideMenu col-lg-12 col-sm-12">
          <SimpleBar style={{ maxHeight: "95%" }} autoHide={false}>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
          </SimpleBar>
        </div>
      </div>
    </div>
  );
};
export default App;
