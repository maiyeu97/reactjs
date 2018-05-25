import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import SignIn from './signinComponent';


const routes = [
    {
        path: "/signin",
        component: SignIn
    },
];


const RouteWithSubRoutes = route => (
    <Route
        path = {route.path}
        render = {props => (
            <route.component {...props} routes={route.routes} />
        )}
    />
);


const RouteConfigExample = () => (
    <Router>
        <div>
            <div style={{textAlign: "center"}}>
                <Link to="/signin" style={{ color: "red" }} onClick={this.signin}>Signin</Link>
            </div>
            
            {routes.map((route, i) => <RouteWithSubRoutes key = {i} {...route} />)}
        </div>
    </Router>
);

export default RouteConfigExample;