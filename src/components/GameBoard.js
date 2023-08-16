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
                row.push(<GamePiece id={[j, i]} />);
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
    const changePiece = (row, column, n) => {
        const rowToSlice = pieces[row];
        setPieces(
            [pieces.slice(0, row),
                [rowToSlice.slice(0, column), n, rowToSlice.slice(column + 1, rowToSlice.length)],
                pieces.slice(row + 1, pieces.length)]
        )
    }


    return (
        <table className='board'>
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
    )
}
