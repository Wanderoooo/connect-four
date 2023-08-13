import React from "react";
import GamePiece from "./GamePiece";
import './GameBoard.css';
import DropArrow from "./DropArrow";

export default function GameBoard() {
    return (
        <table className='board'>
            <tr>
                <td><DropArrow /></td>
                <td><DropArrow /></td>
                <td><DropArrow /></td>
                <td><DropArrow /></td>
                <td><DropArrow /></td>
                <td><DropArrow /></td>
                <td><DropArrow /></td>
            </tr>
            <tr>
                <td><GamePiece initialColor={'red'} /></td>
                {/* by default color is white, set it to a color using initialColor */}
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
            </tr>
            <tr>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
            </tr>
            <tr>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
            </tr>
            <tr>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
            </tr>
            <tr>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
            </tr>
            <tr>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
                <td><GamePiece /></td>
            </tr>
        </table>
    )
}