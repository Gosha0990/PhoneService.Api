import './App.css';
import Input from './Components/Input/Input.jsx'
import ButtonConvert from './Components/ButtonConvert/ButtonConver';
import ButtonStartTest from './Components/ButtonStartTest/ButtonStartTest';
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  let host = 'http://phone_service_api:8080/'
  let rPath = 'api/PhoneService/GetPhoneConvert?phone=8&TraceId=3a319e66-dccd-4ee9-ac5c-07b0ca766756'

  const dispatch = useDispatch();
  const phone = useSelector(state => state.phone);
  console.log(phone);

  return (
    <div className="App">
      <header className="App-header">
        <Input></Input>
        <ButtonConvert></ButtonConvert>
        <ButtonStartTest></ButtonStartTest>
      </header>
    </div>
  );
}

export default App;
