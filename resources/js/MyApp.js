import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import store from "./components/redux/store"

// check auth
import setAuthToken from "./components/utils/setAuthToken";
import PrivateRoute from "./components/route/PrivateRoute";

// Components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import CreateProject from "./components/pages/CreateProject";
import ViewProject from "./components/pages/ViewProject";


// Global Components
import Register from "./components/pages/Register";

import Navbar from "./components/components/reuseable_components/Navbar";
import "./MyApp.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


if (localStorage.getItem('token')) {
    setAuthToken(localStorage.getItem('token'))
}

const MyApp = () => {

    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <PrivateRoute exact path="/create-project" component={CreateProject} />
                    <PrivateRoute exact path="/project/:id" component={ViewProject} />
                    <PrivateRoute exact path="/" component={Home} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default MyApp
