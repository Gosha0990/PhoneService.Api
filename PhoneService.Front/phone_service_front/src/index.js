import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import React from 'react';
import {createStore} from 'redux';
import {Provider,
        useSelector,
        useDispatch} from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

const defaultState = {
  phone: "",
  phoneConver: 0,
  depNum: 0
}

const reducer = (state = defaultState, action) => 
{
    switch (action.type)
    {
        case "ADD_PhoneConver":
          return {...state, phoneConver: action.payload}
        case "ADD_PHONE":
          return {...state, phone: action.payload}
        case "ADD_DEPNUMBER":
          return {...state, depNum: action.payload}
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
