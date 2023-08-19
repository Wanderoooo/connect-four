import React from "react";
import greenArrow from '../assets/greenArrow.png'

export default function DropArrow({column, click}) {
    
    return <img src={greenArrow} alt='drop' width='60px' onClick={click} />

    
}