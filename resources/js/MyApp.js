import React from 'react';
import { Provider } from "react-redux";
import store from "./store/store";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";

import "./MyApp.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const MyApp = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default MyApp;
