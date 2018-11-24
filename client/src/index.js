import React from 'react';
import reactDOM from 'react-dom';

import Root from './Root';
import App from './components/App';


reactDOM.render(
    <Root>
        <App />
    </Root>,
    document.querySelector('#root')
)