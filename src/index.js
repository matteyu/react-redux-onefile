import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";



// Actions


// Reducer


// Store


class App extends React.Component {
  render() {
    return <Provider store={store}>
            <ReduxCounter/>
          </Provider>;
  }
}

const targetElement = document.getElementById("root");

ReactDOM.render(<App />, targetElement);



