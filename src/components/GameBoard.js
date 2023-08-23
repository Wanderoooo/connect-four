import React from "react";
import { useState } from "react";
import GamePiece from "./GamePiece";
import './GameBoard.css';
import DropArrow from "./DropArrow";

export default function GameBoard(props) {
    const [color, setColor] = React.useState("red")
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
    //hehe
    React.useEffect(() => {
        if (!props.turn) {
            setColor(() => "red")
        } else {
            setColor(() => "yellow")
        }
        
    }, [props.turn])
    
    const changePiece = (row, column, newPiece) => {
        const res = [];
        for (let i = 0; i < pieces.length; i++) {
            res.push(pieces[i]);
        }

        res[row][column] = newPiece;
        setPieces(res);
        const saveArray = [row, column]

        

        if (props.turn) {

            props.handlePlayerRedPlays(prevPlays => {
                return [...prevPlays, saveArray]
            })
            
        } else {
            props.handlePlayerYellowPlays(prevPlays => [...prevPlays, saveArray])
        }
        
    }


    //drops a colored piece at specified column, 1-based indexing
    function drop(column) {
        
        let toDrop;
        if (props.turn) {
            toDrop = <GamePiece color={'red'} id={[99, column]}/>;
        } else {
            toDrop = <GamePiece color={'yellow'} id={[99, column]}/>;
        }
        let pieceCol = [];
        for (let i = 0; i < pieces.length; i++) {
            pieceCol.push(pieces[i][column - 1])
        }
        if (findHighestFilled(pieceCol) !== pieceCol.length) {
            changePiece(6 - findHighestFilled(pieceCol), column - 1, toDrop);
            // props.handleTurn(prevTurn => !prevTurn);
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
        <div>{props.winStat ? <h1>{`player ${color} wins!`}</h1>
        :
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
        }
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
        </div>
    )
}
