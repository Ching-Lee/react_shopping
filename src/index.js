import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterMap from './routerMap';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import configureStore from './store/configStore'

const store=configureStore();
ReactDOM.render(
    <Provider store={store}>
        <RouterMap/>
    </Provider>
    ,
    document.getElementById('root'));

registerServiceWorker();
