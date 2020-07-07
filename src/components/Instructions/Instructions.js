import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { ADD_INSTRUCTION, ADD_RECIPE } from "./../../store";

class Instructions extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      instructions: reduxState.instructions,
      input: ""
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store. getState();
      this.setState({
        instructions: reduxState.instructions
      });
    });
  }
  addInstruction() {
    store.dispatch({
      type: ADD_INSTRUCTION,
      payload: this.state.input
    });
    this.setState({
      input: ""
    });
  }
  create() {
    store.dispatch({
      type: ADD_RECIPE
    });
  }
}

export default Instructions;
