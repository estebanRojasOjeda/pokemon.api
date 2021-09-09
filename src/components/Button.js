import React,{ useState, useEffect } from "react";
import style from "./button.module.css";
import View from "./View";


const Button = () =>{
    const [buttonState, setButtonState] = useState("");
    const [data, setData] = useState("");

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=200')
            .then(resp => resp.json())
            .then(resp => setData(resp.results))
    }, [buttonState])

    const changeButtonState = (e) =>{
        setButtonState(e.target.value);
    }

    return (
        <>
            <button onClick={changeButtonState}>Fetch Pokemon</button>
            <View data={data}></View>
        </>
    );
} 

export default Button;