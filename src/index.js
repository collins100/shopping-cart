import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import './index.css';
import { getAllProducts } from './actions'
import App from './containers/App.js';
import registerServiceWorker from './registerServiceWorker';

/*const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}*/

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

store.dispatch(getAllProducts())

render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
registerServiceWorker();
