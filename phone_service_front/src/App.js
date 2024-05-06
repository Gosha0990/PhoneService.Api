import './App.css';
import Input from './Components/Input/Input.jsx'
import ButtonConvert from './Components/ButtonConvert/ButtonConver';
import ButtonStartTest from './Components/ButtonStartTest/ButtonStartTest';
import SelectMethod from './Components/SelectMethods/SelectMethods.jsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  useDispatch();
  const resPhone = useSelector(state => state.phoneConver);
  const complitRequestCount = useSelector(state => state.countCompliteRequest);
  const unsuccessfulRequestsCount = useSelector(state => state.countCancelRequest);
  const requestCount = useSelector(state => state.countRequest);

  console.log(requestCount);

  return (
    <div className="mainDiv">
      <header className="App-header">
        <Input></Input>
        <SelectMethod></SelectMethod>
        <p className ='textInputSelector'>
        Результат конвертации: {resPhone}
        </p>
        <ButtonConvert></ButtonConvert>
        <ButtonStartTest></ButtonStartTest>
        <p className ='textInputSelector'>
        Количество тестовых запросов: {requestCount}
        </p>
        <p className ='textInputSelector'>
        Количество успешныйх запросов: {complitRequestCount}
        </p>
        <p className ='textInputSelector'>
        Количество не успешных звпросов: {unsuccessfulRequestsCount}
        </p>
      </header>
    </div>
  );
}

export default App;
