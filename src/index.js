import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore } from 'redux'; 
import allReducers from './reducers'; 

const store = createStore(allReducers); 

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
     document.getElementById('root'));
registerServiceWorker();
//marc aveco atlanti 