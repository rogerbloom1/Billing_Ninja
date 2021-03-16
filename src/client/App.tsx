import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./views/Home"

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
            <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;