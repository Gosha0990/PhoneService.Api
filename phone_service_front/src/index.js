import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

const defaultState = {
  phone: "",
  phoneConver: 0,
  method: "",
  countRequest: 0,
  countCompliteRequest: 0,
  countCancelRequest: 0,
}

const reducer = (state = defaultState, action) => 
{
    switch (action.type)
    {
        case "ADD_PhoneConver":
          return {...state, phoneConver: action.payload}
        case "ADD_PHONE":
          return {...state, phone: action.payload}
        case "ADD_Method":
          return {...state, method: action.payload}
        case "ADD_CountRequest":
          return {...state, countRequest: action.payload}
        case "ADD_CountCompliteRequest":
          return {...state, countCompliteRequest: action.payload}
        case "ADD_CountCancelRequest":
          return {...state, countCancelRequest: action.payload}
        case "GET_CASH":
          return {...state, cash: state.cash - action.payload}
        default:
          return state
    }
}

const store = createStore(reducer)

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

);
