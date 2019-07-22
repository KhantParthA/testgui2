import React from "react";
import ReactDOM from "react-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import select from "./models/select";
import App from "./App";

// generate Redux store
const store = init({
  models: {
    select
  },
})

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.querySelector('#root'))