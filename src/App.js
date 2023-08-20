import React from 'react';
import GameBoard from './components/GameBoard.js';
import './App.css';


function App() {

  const [isWin, setIsWin] = React.useState(false)
  
  function handleWin({selectedIdArray, idsDoubleArray}) {
    const isWin = checkGreaterEqualsFour(selectedIdArray, idsDoubleArray) ||
    checkCross(selectedIdArray, idsDoubleArray);

    return isWin;
  }

  function checkCross(selectedIdArray, idsDoubleArray) {
    const diagSolutionsTArray = makeDiagSolutionsTArray(selectedIdArray)
    const includeSelectedIdDArray = idsDoubleArray.push(selectedIdArray)

    for (let i = 0; i < diagSolutionsTArray.length; i++) {
      if (diagSolutionsTArray.every(element => includeSelectedIdDArray.includes(element))) {
        return true;
      }
    }

  }

  function makeDiagSolutionsTArray(selectedIdArray) {
    let allDiagSolnTArray = [
      [
        [selectedIdArray[0] - 3, selectedIdArray[0] + 3],
        [selectedIdArray[0] - 2, selectedIdArray[0] + 2],
        [selectedIdArray[0] - 1, selectedIdArray[0] + 1],
        [selectedIdArray[0], selectedIdArray[0]]
      ],

      [
        [selectedIdArray[0] - 2, selectedIdArray[0] + 2],
        [selectedIdArray[0] - 1, selectedIdArray[0] + 1],
        [selectedIdArray[0], selectedIdArray[0]],
        [selectedIdArray[0] + 1, selectedIdArray[0] - 1]
      ]
    ]

    for (let i = 0; i < 8; i++) {
      let aSoln = [];
      let bSoln = [];

      for (let j = 3; j >= 0; j--) {
        aSoln = [
          [selectedIdArray[0] - j, selectedIdArray[0] + j],
          [selectedIdArray[0] + 1 - j, selectedIdArray[0] - 1 + j],
          [selectedIdArray[0] + 2 - j, selectedIdArray[0] - 2 + j],
          [selectedIdArray[0] + 3 - j, selectedIdArray[0] - 3 + j]
        ]

        bSoln = [
          [selectedIdArray[0] - j, selectedIdArray[0] - j],
          [selectedIdArray[0] + 1 - j, selectedIdArray[0] + 1 - j],
          [selectedIdArray[0] + 2 - j, selectedIdArray[0] + 2 - j],
          [selectedIdArray[0] + 3 - j, selectedIdArray[0] + 3 - j]
        ]
      }

      allDiagSolnTArray.push(aSoln)
      allDiagSolnTArray.push(bSoln)
    }


    return allDiagSolnTArray;
  }

  function checkGreaterEqualsFour(selectedIdArray, idsDoubleArray) {
    let firstIndexNumOfOccur = 0;
    let secondIndexNumOfOccur = 0;

    for (let i = 0; i < idsDoubleArray.length; i++) {
      if (idsDoubleArray[i][0] === selectedIdArray[0]) {
        firstIndexNumOfOccur++;
      } else if (idsDoubleArray[i][1] === selectedIdArray[1]) {
        secondIndexNumOfOccur++;
      }
  }

  return Math.max(firstIndexNumOfOccur, secondIndexNumOfOccur) >= 4;
}

  const [playerOnePlays, setPlayerOnePlays] = React.useState([])
  const [playerTwoPlays, setPlayerTwoPlays] = React.useState([])

  const theBoard = <GameBoard handlePlayerOne={setPlayerOnePlays} handlePlayerTwo={setPlayerTwoPlays} />;

  return (
    <div className="App">
      {theBoard}
    </div>
  );
}


export default App;
