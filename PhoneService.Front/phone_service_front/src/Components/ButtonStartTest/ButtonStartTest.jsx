import React, { useState } from "react";
import './ButtonStartTest.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import uuid from 'react-uuid';
import url from '../Constans/GlobalBag'

const pathPost = '/api/PhoneService/PostPhoneConvert';
const pathGet = '/api/PhoneService/GetPhoneConvert';
const host = url();

function ButtonStartTest()
{
    useDispatch();
    const [state, setStatusClic] = useState(false);
    const phone = useSelector(state => state.phone);
    
    let [response, setResponse] = useState("");

    let body = 
    {
        "phone": phone
    };

    console.log(host);
    console.log(pathPost);

    async function GetRequest()
    {
        try
        {
            axios.defaults.headers.post['Access-Control-Allow-Methods'] = '*';
            axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';
            axios.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';
            let mainResponse = await axios.post(host + pathPost, body);
            setResponse(mainResponse.data.phoneNumber);
            console.log(response);
        }       
        catch(exception_var) 
        {
            console.log(exception_var);
        }
    }

    function click()
    {
        GetRequest();
        setStatusClic();
    }

    return(
        <div>
           <button className="button-style-pressd-test" onClick={click} >Запуск теста</button>
        </div>

        );


}

export default ButtonStartTest;