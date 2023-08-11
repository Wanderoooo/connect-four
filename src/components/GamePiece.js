import React from 'react'
import redPiece from '../assets/redPiece.png'
import yellowPiece from '../assets/yellowPiece.png'
import whitePiece from '../assets/whitePiece.png'

function GamePiece({ color }) {
    if (color === 'red') {
        return <img src={redPiece} alt='redPiece' width='100px' />;
    }
    if (color === 'yellow') {
        return <img src={yellowPiece} alt='yellowPiece' width='100px' />;
    } else {
        return <img src={whitePiece} alt='whitePiece' width='100px' />;
    }
}

export default GamePiece;