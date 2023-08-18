import React from 'react'
import { useState } from 'react'
import redPiece from '../assets/redPiece.png'
import yellowPiece from '../assets/yellowPiece.png'
import whitePiece from '../assets/whitePiece.jpg'

export default function GamePiece({initialColor, id}) {

    const [color, setColor] = useState(initialColor);
    if (color === "red") {
        return <img src={redPiece} alt='redPiece' width='100px' onClick={setYellow}/>; //onClicks are just making sure i can change states
    }
    if (color === 'yellow') {
        return <img src={yellowPiece} alt='yellowPiece' width='100px' onClick={setWhite}/>;
    } else {
        return (
            <>
            <img src={whitePiece} alt='whitePiece' width='100px' onClick={setRed}/>
            {id}
            </>
        )
    }

    function setRed() {
        setColor('red');
    }

    function setYellow() {
        setColor('yellow');
    }

    function setWhite() {
        setColor('white');
    }

}
