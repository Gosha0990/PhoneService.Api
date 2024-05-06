import './SelectMethod.css';
import { useDispatch} from 'react-redux';
import React, { useState} from "react";


function SelectMethod()
{
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const addCash = (method) => 
    {
        dispatch({type: "ADD_Method", payload: method})
    }

    function chengeSelect(event) {
        setValue(event.target.value);
        addCash(event.target.value);
     }

    return(
        <div>
            <dic>
        <select className ='mainStyleSelector' value={value} onChange={chengeSelect}>
         <option>Get</option>
         <option>Post</option>
      </select>
      </dic>
   </div>
    );

}

export default SelectMethod;