import React from 'react';
import GameBoard from './components/GameBoard.js';
import './App.css';


function App() {

  const [isWin, setIsWin] = React.useState(false)
  const [playerRedPlays, setPlayerRedPlays] = React.useState([])
  const [playerYellowPlays, setPlayerYellowPlays] = React.useState([])
  // true -> red
  // false -> yellow
  const [turn, setTurn] = React.useState(true);

  
  

React.useEffect(() => {
  const isWinStatus = handleWin(playerRedPlays);
  setIsWin(isWinStatus)
  setTurn(prevTurn => !prevTurn)

  function handleWin(plays) {
    const isPlayerWin = checkGreaterEqualsFour(plays) || checkCross(plays); 
    return isPlayerWin;
  }

  function checkCross(plays) {
    if (plays.length - 1 < 0) {
      return false;
    }
  
    const lastPlay = plays[plays.length - 1];
    const diagSolutionsTArray = makeDiagSolutionsTArray(lastPlay); 
    let isPlayerWin = false;
  
    for (let i = 0; i < diagSolutionsTArray.length; i++) {

      if (diagSolutionsTArray[i].every(arr => plays.some(subArr => JSON.stringify(subArr) === JSON.stringify(arr)))) {
        isPlayerWin = true;
        break;
      }
    }
    return isPlayerWin
  
  }
}, [playerRedPlays])

React.useEffect(() => {
  setTurn(prevTurn => !prevTurn)
  const isWinStatus = handleWin(playerYellowPlays)
  setIsWin(isWinStatus)

  function handleWin(plays) {
    const isPlayerWin = checkGreaterEqualsFour(plays) || checkCross(plays); 
    return isPlayerWin;
  }

  function checkCross(plays) {
    if (plays.length - 1 < 0) {
      return false;
    }
  
    const lastPlay = plays[plays.length - 1];
  
    const diagSolutionsTArray = makeDiagSolutionsTArray(lastPlay);
    let isPlayerWin = false;
  
    for (let i = 0; i < diagSolutionsTArray.length; i++) {
      if (diagSolutionsTArray[i].every(arr => plays.some(subArr => JSON.stringify(subArr) === JSON.stringify(arr)))) {
        isPlayerWin = true;
        break;
      }
    }
  
    return isPlayerWin;
  
  }
}, [playerYellowPlays])


function makeDiagSolutionsTArray(selectedIdArray) {
  let allDiagSolnTArray = [];

    for (let j = 3; j >= 0; j--) {
      const aSoln = [
        [selectedIdArray[0] - j, selectedIdArray[1] + j], // top right bottom left diagonal
        [selectedIdArray[0] + 1 - j, selectedIdArray[1] - 1 + j],
        [selectedIdArray[0] + 2 - j, selectedIdArray[1] - 2 + j],
        [selectedIdArray[0] + 3 - j, selectedIdArray[1] - 3 + j],
      ]

      allDiagSolnTArray.push(aSoln);

      const bSoln = [
        [selectedIdArray[0] - j, selectedIdArray[1] - j], // top left bottom right diagonal
        [selectedIdArray[0] + 1 - j, selectedIdArray[1] + 1 - j],
        [selectedIdArray[0] + 2 - j, selectedIdArray[1] + 2 - j],
        [selectedIdArray[0] + 3 - j, selectedIdArray[1] + 3 - j],
      ]

      allDiagSolnTArray.push(bSoln);
    }

  return allDiagSolnTArray;
}

function checkGreaterEqualsFour(plays) {
  let firstIndexNumOfOccur = 0;
  let secondIndexNumOfOccur = 0;

  if (plays.length - 1 < 0) {
    return false;
  }

  const lastPlay = plays[plays.length - 1]

  for (let i = 0; i < plays.length; i++) {
    if (plays[i][0] === lastPlay[0]) {
      firstIndexNumOfOccur++;
    } else if (plays[i][1] === lastPlay[1]) {
      secondIndexNumOfOccur++;
    }
}

  return Math.max(firstIndexNumOfOccur, secondIndexNumOfOccur) >= 4;
}


  const theBoard = <GameBoard handlePlayerRedPlays={setPlayerRedPlays} handlePlayerYellowPlays={setPlayerYellowPlays} winStat={isWin} turn={turn} />;

  return (
    <div className="App">
      {theBoard}
    </div>
  );
}


export default App;
