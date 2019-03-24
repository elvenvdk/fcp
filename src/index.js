import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./components/App";
import Stack from "./components/Stack";
import rootReducer from "./reducers";
import { setStack } from "./actions";
import StackForm from "./components/StackForm";

const store = createStore(rootReducer);
store.subscribe(() => console.log("store", store.getState()));
store.dispatch(setStack({ id: 0, title: "example", cards: [] }));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/stack' component={Stack} />
        <Route path='/stack_form' component={StackForm} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
