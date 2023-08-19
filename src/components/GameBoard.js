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
                row.push(<GamePiece color={'white'} id={[i, j]} />);
            }
            res.push(row);
            row = [];
        }
        return res;
    });

    // 0 -> game over
    // 1 -> red
    // 2 -> yellow
    const [turn, setTurn] = useState(1);
    
    
    const changePiece = (row, column, newPiece) => {
        const res = [];
        for (let i = 0; i < pieces.length; i++) {
            res.push(pieces[i]);
        }
        res[row][column] = newPiece;
        setPieces(res);
    }


    //drops a colored piece at specified column, 1-based indexing
    function drop(column) {
        let toDrop;
        if (turn === 1) {
            toDrop = <GamePiece color={'red'} id={[99, column]}/>;
        } else if (turn === 2) {
            toDrop = <GamePiece color={'yellow'} id={[99, column]}/>;
        }
        let pieceCol = [];
        for (let i = 0; i < pieces.length; i++) {
            pieceCol.push(pieces[i][column - 1])
        }
        if (findHighestFilled(pieceCol) !== pieceCol.length) {
            console.log(pieces[0][0]);
            changePiece(6 - findHighestFilled(pieceCol), column - 1, toDrop);
            if (turn === 1) {setTurn(2)} else if (turn === 2) {setTurn(1)};
        }

            

    }

    function findHighestFilled(pieceCol) {
        if (pieceCol[pieceCol.length - 1].props.color === 'white') {
            return 0;
        }
        for (let i = 0; i < pieceCol.length; i++) {
            if (pieceCol[i].props.color !== 'white') {
                return pieceCol.length - i;
            }
        }
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
