import React from "react";
import './game-over.styles.scss';

const GameOver = ({winnerOrLoser, message}) => {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column'>
            <h1>
                {winnerOrLoser.name} {message}
            </h1>
            <h2>Score: {winnerOrLoser.score}</h2>
        </div>
    )
};

export default GameOver;