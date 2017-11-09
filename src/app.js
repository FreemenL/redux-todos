import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from 'reducers/index';

import App from 'components/App.js';

const store = createStore(todoApp);
/*
  Provider 相当于一个最顶层的组件  通过store属性 把createStore创建的store 置为整个应用的最顶层状态

  然后在connect中通过this.context 来获取到这个最顶层的 状态传给 子孙组件(在这里值connect()()的第二个单数传进去的组件)；
*/ 

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)





