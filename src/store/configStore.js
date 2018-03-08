import thunkMiddleware from 'redux-thunk';
import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from '../reducer/rootReducer'

//redux第二步，创建store
export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer,initialState,
        composeEnhancers(applyMiddleware(thunkMiddleware)
        ));

    return store;

}

/*const store = createStore(
            rootReducer,
            initialState,
            applyMiddleware(thunkMiddleware),
            // 触发 redux-devtools
            window.devToolsExtension ? window.devToolsExtension() : undefined,

        );*/