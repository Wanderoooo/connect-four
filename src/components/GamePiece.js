import React from 'react'
import redPiece from '../assets/redPiece.png'
import yellowPiece from '../assets/yellowPiece.png'
import whitePiece from '../assets/whitePiece.jpg'

export default function GamePiece({color, id}) {
    
    if (color === 'red') {
        return <img src={redPiece} alt='redPiece' width='100px' />; //onClicks are just making sure i can change states
    }
    if (color === 'yellow') {
        return <img src={yellowPiece} alt='yellowPiece' width='100px' />;
    } else {
        return (
            <img src={whitePiece} alt='whitePiece' width='100px' />
        )
    }

}
