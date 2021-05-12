import { useState } from 'react';



export default function Button(props) {
    const [counter, setCounter] = useState(1);

    // devolve um array
    // primeira informação é um estado [estado, alterarEstado]
    // segunda informação é uma função que vai alterar o estado.

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <>
            <span>{counter}</span>
            <button onClick={increment}>{props.children}</button>
            <br />
        </>
    )
}