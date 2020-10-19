import React from "react";
import ReactDOM from "react-dom";
import Header from "../../components/Header";

ReactDOM.render(
  React.createElement("div", {}, React.createElement(Header), "Hello admin"),
  document.getElementById("root")
);
