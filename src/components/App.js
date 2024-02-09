import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Actors from './Actors';
import Directors from './Directors';
import Movies from './Movies';

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/movies">
                    <Movies />
                </Route>
                <Route exact path="/directors">
                    <Directors />
                </Route>
                <Route exact path="/actors">
                    <Actors />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
