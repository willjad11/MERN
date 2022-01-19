import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

const Form = () => {
    const [keyword, setKeyword] = useState("");
    const [textcolor, setTextcolor] = useState("");
    const history = useHistory();
    const submitHandler = (e) => {
        e.preventDefault();
        history.push(`/${keyword}/${textcolor}`)
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Keyword: </label>
                    <input type="text" onChange={(e) => setKeyword(e.target.value)} />
                </p>
                <p>
                    <label>Text Color: </label>
                    <input type="text" onChange={(e) => setTextcolor(e.target.value)} />
                </p>
                <button>Submit</button>
            </form>
        </fieldset>
    );
};

export default Form;
