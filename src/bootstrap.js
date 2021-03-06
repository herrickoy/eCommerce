import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Route, Switch } from "react-router-dom";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() :  f => f)(createStore)));

import "./style/main.scss";

import history from './history';

import Layout from "./components/layout";
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
import Account from "./components/account/account";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path='/' exact component={SignIn}/>
            <Route path='/signIn' exact component={SignIn}/>
            <Route path='/signUp' exact component={SignUp}/>

            <Route path='/account' exact component={Account}/>
          </Switch>        
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
