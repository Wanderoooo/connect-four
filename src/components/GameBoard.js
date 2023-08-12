import React from "react";
import GamePiece from "./GamePiece";
import './GameBoard.css';

export default function GameBoard() {
    return (
        <table className='board'>
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