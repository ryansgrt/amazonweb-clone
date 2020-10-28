import React from 'react';
import './assets/css/App.css';
import Header from './component/Header'
import Home from "./component/Home";
import Checkout from "./component/Checkout";
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/checkout">
                        <Header/>
                        <Checkout/>
                    </Route>
                    <Route path="/">
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
