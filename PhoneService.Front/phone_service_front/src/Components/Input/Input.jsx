import React, { useState, useRef, useEffect } from "react";
import './input.css';
import { useDispatch} from "react-redux";


function Input()
{

    const [val, setVal] = useState("");
    const textAreaRef = useRef(null);

    const dispatch = useDispatch();

    const addCash = (phone) => 
    {
        dispatch({type: "ADD_PHONE", payload: val})
    }

    useEffect(() => {
        textAreaRef.current.style.height = "auto";
    }, [val]);

    const onChange = e => {
        setVal(e.target.value);
        addCash();
    };

    return(
        <div>
        <div className='textInput'>
          Введите номер толефона
        </div>
            <div>
                <h1></h1>
            </div>
            <textarea o className="mainStyle" placeholder="Введите номер телефона" 
            rows="1"
            onChange={onChange}
            value={val}
            ref={textAreaRef}
            maxLength={20}></textarea>
        </div>
    );
}

export default Input;