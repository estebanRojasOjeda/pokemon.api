import React, { useState } from "react";
//import style from "./button.module.css";
import View from "./View";


const Button = () => {
    const [data, setData] = useState("");

    const changeButtonState = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=200')
            .then(resp => resp.json())
            .then(resp => setData(resp.results))
    }

    return (
        <>
            <button onClick={changeButtonState}>Fetch Pokemon</button>
            <View data={data}></View>
        </>
    );
}

export default Button;