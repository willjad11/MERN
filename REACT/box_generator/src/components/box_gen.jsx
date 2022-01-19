import { useState } from 'react';

const BoxGen = (props) => {
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submittedBox(color);
        setColor("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Set Box color</h1>
            <input type="text" onChange={(e) => setColor(e.target.value)} value={color}/>
            <input type="submit" value="Send a Message" />
        </form>
    );
};

export default BoxGen;