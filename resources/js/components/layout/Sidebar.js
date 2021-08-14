import react from "react";
import {Switch, Route, Link, BrowserRouter as Router} from "react-router-dom";
import route from "../routes";

const Sidebar = () => {
    return (
        <div style={{ display: "flex" }}>
            <div
                style={{
                    padding: "10px",
                    width: "40%",
                    background: "#f0f0f0"
                }}
            >
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/bubblegum">Bubblegum</Link>
                    </li>
                    <li>
                        <Link to="/shoelaces">Shoelaces</Link>
                    </li>
                </ul>

                <Switch>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.sidebar />}
                        />
                    ))}
                </Switch>
            </div>

            <div style={{ flex: 1, padding: "10px" }}>
                <Switch>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.main />}
                        />
                    ))}
                </Switch>
            </div>
        </div>
    );
}

export default Sidebar;
