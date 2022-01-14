import React, {useState} from "react"

const FunctionalComponent = (props) => {
    const {petname} = props;
    const [count, setCount] = useState(0)

    const alertMessage = (msg) => {
        alert(msg)
    }

    return(
        <div>
            <h1>Functional Component</h1>
            <h3>{petname}</h3>
            <button onClick={() => alertMessage("message")}>functional alert button</button>
            <button onClick={() => setCount(count + 1)}>functional use state counter</button>
            <p>Count: {count}</p>
        </div>
    )
}
export default FunctionalComponent