import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';
import Lessons from '../components/Lessons/Lessons';


class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/" component={Lessons}/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;