import React from "react";
import { useState } from "react";
import GamePiece from "./GamePiece";
import './GameBoard.css';
import DropArrow from "./DropArrow";

export default function GameBoard() {

    const [pieces, setPieces] = useState([
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
        ] //actual inital board state is all white, there's one red dot there for fun
    );

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

    const getColor = (n) => {
        if (n === 1) {
            return 'red';
        }
        if (n === 2) {
            return 'yellow';
        }
        return 'white'; 
    }

    const renderTableRow = (rowData) => {
        return (
            <tr>
                <td>
                    {rowData.map((item, i) => 
                        ( <GamePiece initialColor={getColor(item)}/>))}
                </td>
            </tr>
        )
    }

    return (
        <table className='board'>
            {pieces.map((item, i) => (renderTableRow(item)))}
        </table>
    )
}
