import React, { useState } from "react";
import './ButtonStartTest.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import url from '../Constans/GlobalBagTest'

const pathPost = '/api/LoadTests/LoadTestPostPhoneConvert';
const pathGet = '/api/LoadTests/LoadTestGetPhoneConvert';
const host = url();

function ButtonStartTest()
{
    const dispatch = useDispatch();

    const [state, setStatusClic] = useState(false);
    const method = useSelector(state => state.method);
    let [response, setResponse] = useState("");

    let body = {};

    async function PostRequest()
    {
        try
        {
            axios.defaults.headers.post['Access-Control-Allow-Methods'] = '*';
            axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';
            axios.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';
            let mainResponse = await axios.post(host + pathPost, body);
            setResponse(mainResponse.data);
        }       
        catch(exception_var) 
        {
            console.log(exception_var);
        }
    }

    function PostClick()
    {
        PostRequest();
        setStatusClic();
    }

    const addCash = (val) => 
        {
            dispatch({type: "ADD_CountRequest", payload: val.requestCount});
            dispatch({type: "ADD_CountCompliteRequest", payload: val.complitRequestCount});
            dispatch({type: "ADD_CountCancelRequest", payload: val.unsuccessfulRequestsCount});
        }
    

    async function GetRequest()
    {
        try
        {
            var path = host + pathGet;

            axios.defaults.headers.post['Access-Control-Allow-Methods'] = '*';
            axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';
            axios.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';
            let mainResponse = await axios.get(path, body);
            setResponse(mainResponse.data);
        }       
        catch(exception_var) 
        {
            console.log(exception_var);
        }
    }

    function GetClick()
    {
        GetRequest();
        setStatusClic();
    }
    
    addCash(response);

    if(method === 'Post')
    return(
        <div>
           <button className="button-style-pressd-test" onClick={PostClick} >Старт тест</button>
        </div>

        );
    else
    {
        return(
            <div>
               <button className="button-style-pressd-test" onClick={GetClick} >Старт тест</button>
            </div>
    
            );
    }

}

export default ButtonStartTest;