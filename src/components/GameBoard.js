import React from "react";
import { useState } from "react";
import GamePiece from "./GamePiece";
import './GameBoard.css';
import DropArrow from "./DropArrow";

export default function GameBoard() {

    const [pieces, setPieces] = useState(() => {
        let res = [];
        let row = [];
        for (let i = 7; i >= 1; i--) {
            for (let j = 1; j <= 7; j++) {
                row.push(<GamePiece initialColor={'white'} id={[i, j]} />);
            }
            res.push(row);
            row = [];
        }
        return res;
    });
    
    // n is the target color; 
    // 0 -> white
    // 1 -> red
    // 2 -> yellow
    const changePiece = (row, column, newPiece) => {
        pieces[row][column] = newPiece;
        const res = pieces;
        setPieces(res);
        console.log(pieces);
        
    }


    //drops a colored piece at specified column, 1-based indexing
    function drop(column) {
        //if (pieces[7 - 1][column - 1].a == 'white') {
            console.log(column)
            changePiece(7 - 1, column - 1, <GamePiece initialColor={"red"} id={[99, column]}/>)
        //}
        
    }

    return (
        <>
            <table className="drops board">
                <tr>
                    <td><DropArrow click={function(){drop(1)}} /></td>
                    <td><DropArrow click={function(){drop(2)}} /></td>
                    <td><DropArrow click={function(){drop(3)}} /></td>
                    <td><DropArrow click={function(){drop(4)}} /></td>
                    <td><DropArrow click={function(){drop(5)}} /></td>
                    <td><DropArrow click={function(){drop(6)}} /></td>
                    <td><DropArrow click={function(){drop(7)}} /></td>
                </tr>
            </table>
            <table className="board">
                {pieces.map((row) => {
                    return (
                        <tr>
                            <td>
                                {row}
                            </td>
                        </tr>
                    )}
                )}
            </table>
        </>
    )
}
