import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from 'reducers/index';

import App from 'components/App.js';

const store = createStore(todoApp);


render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)





