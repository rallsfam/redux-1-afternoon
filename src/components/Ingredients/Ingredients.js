import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { ADD_INGREDIENT } from "./../../store";

class Ingredients extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      ingredients: reduxState. ingredients,
      input: ""
    };
  }
  componentDidMount() {
    store.subsribe(() => {
      const reduxState = store.getState();
      this.setState({
        ingredients: reduxState.ingredients
      });
    });
  }

  addIngredient() {
    store.dispatch({
      type: ADD_INGREDIENT,
      payload: this.state.input
    });
    this.setState({
      input: ""
    });
  }
}

export default Ingredients;
