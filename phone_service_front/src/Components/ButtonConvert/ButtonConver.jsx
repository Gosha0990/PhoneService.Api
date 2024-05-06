import React, { useState } from "react";
import './ButtonConver.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import uuid from 'react-uuid';
import url from '../Constans/GlobalBag'

const pathPost = '/api/PhoneService/PostPhoneConvert';
const pathGet = '/api/PhoneService/GetPhoneConvert';
const host = url();

function ButtonConvert()
{
    const dispatch = useDispatch();

    const [state, setStatusClic] = useState(false);
    const phone = useSelector(state => state.phone);
    const method = useSelector(state => state.method);
    let [response, setResponse] = useState("");

    let body = 
    {
        "phone": phone,
        "traceId": uuid()
    };

    async function PostRequest()
    {
        try
        {
            axios.defaults.headers.post['Access-Control-Allow-Methods'] = '*';
            axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';
            axios.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';
            let mainResponse = await axios.post(host + pathPost, body);
            setResponse(mainResponse.data.phoneNumber);
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
            dispatch({type: "ADD_PhoneConver", payload: val})
        }
    

    async function GetRequest()
    {
        try
        {
            var path = host + pathGet + '?phone=' + phone + '&TraceId=' + uuid();

            axios.defaults.headers.post['Access-Control-Allow-Methods'] = '*';
            axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';
            axios.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';
            let mainResponse = await axios.get(path, body);
            setResponse(mainResponse.data.phoneNumber);
            console.log(response);
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
           <button className="button-style-pressd" onClick={PostClick} >Отправить</button>
        </div>

        );
    else
    {
        return(
            <div>
               <button className="button-style-pressd" onClick={GetClick} >Отправить</button>
            </div>
    
            );
    }

}

export default ButtonConvert;