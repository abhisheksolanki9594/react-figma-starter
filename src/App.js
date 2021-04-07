import React from "react";
import { Button } from "./material-components";
import "./App.css";

function Greetings() {
    const [name, setName] = React.useState(() => {
        return window.localStorage.getItem("name") || "";
    });

    React.useEffect(() => {
        window.localStorage.setItem("name", name);
    }, [name]);

    const handleChange = (event) => setName(event.target.value);

    return (
        <div>
            <form>
                <label htmlFor='name'>Name: </label>
                <input value={name} onChange={handleChange} id='name'></input>
            </form>
            {name ? <strong>Hello {name}</strong> : "Please type your name"}
        </div>
    );
}

function App() {
    const [count, setCount] = React.useState(0);
    return (
        <>
            <Button variant='contained' color='primary' onClick={() => setCount((totalCount) => totalCount + 1)}>
                {count}
            </Button>
        </>
    );
}

export { Greetings, App };
