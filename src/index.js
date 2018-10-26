import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CourseReducer from './store/reducers/coursereducer'
import { Provider } from 'react-redux'
import { combineReducers, createStore, compose, applyMiddleware} from 'redux'
import { BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk'
import AuthorReducer  from './store/reducers/authorReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    courseData:CourseReducer,
    authorsData:AuthorReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))

console.log($, Popper)
const app = (
    <Provider store={store}>
        <BrowserRouter basename="/">
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
