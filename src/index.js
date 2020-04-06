import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'iot sprinkler web-ui';


ReactDOM.render(
    <App title={title} />,
    document.getElementById('app')
);

module.hot.accept();