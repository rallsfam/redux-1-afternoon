// import React, { Component } from "react";
// import {Link } from "react-router-dom";
// import store, { UPDATE_NAME, UPDATE_CATEGORY } from "./../../store";

class Name extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      category: reduxState.category
    };
  }
}

export default Name;