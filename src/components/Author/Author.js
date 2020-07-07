import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { UPDATE_AUTHOR_FIRST, UPDATE_AUTHOR_LAST } from "./../../store";
import './Author.css';

class Author extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      authorFirst: reduxState.authorFirst,
      authorLast: reduxState.authorLast
    };
  }
  
  saveChanges() {
    store.dispatch({
      type: UPDATE_AUTHOR_FIRST,
      payload: this.state.authorFirst
    });
    store.dispatch({
      type: UPDATE_AUTHOR_LAST,
      patload: this.state.authorLast
    });
  }
}

export default Author;
