import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';
import Lessons from '../components/Lessons/Lessons';


class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Lessons}/>
                        <Redirect to="/"/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;