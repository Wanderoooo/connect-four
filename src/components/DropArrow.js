import React from "react";
import greenArrow from '../assets/greenArrow.png'

export default function DropArrow({column, click}) {
    const foo = () => {
        console.log('click')
    }
    
    return <img src={greenArrow} alt='drop' width='60px' onClick={click} />

    function drop() {
        //drops colored piece in this column
        
        //it would update the 2d array storing the game state, 
        //  then re-render the GamePiece corresponding to the
        //  element in the 2d array that was just updated
    }





    function getColumn() {
        return column;
    }
}