import React from 'react';
import {useState} from "react";
import Canvas from "./Canva";
import "./game.css"
import {calculateWinner} from "../helper";

function Game() {
    const [canvas, setCanvas] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(canvas)

    const startNewGame = () =>{
        setCanvas(Array(9).fill(null))
    }

    const handleClick = (index) =>{
        const canvasCopy = [...canvas]

        if(winner || canvasCopy[index]) return

        canvasCopy[index] = xIsNext ? "X" : "0"

        setCanvas(canvasCopy)
        setXIsNext(!xIsNext)
    }

    return (
        <div className="wrapper">
            <div className="btn-clear-canvas_wrapper">
                <button className="btn-clear-canvas" onClick={()=>{startNewGame()}}>Очистити поле</button>
            </div>
            <Canvas squares = {canvas} click = {handleClick}/>
            <p>
                {winner ?"Переможець: "+ winner : "Зараз ходить: " + (xIsNext?"X":"0")}
            </p>
        </div>
    );
}

export default Game;