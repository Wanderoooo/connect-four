import logo from './logo.svg';
import './App.css';

function App() {
  let firstIndexSameIds = 0;
  let secondIndexSameIds = 0;

  function handleWin({selectedIdArray, idsDoubleArray}) {
    const isWin = 
    checkGreaterEqualsFour(selectedIdArray, idsDoubleArray)
    // !!! do cond 2
    

    return isWin;
  }

  function checkGreaterEqualsFour(selectedIdArray, idsDoubleArray) {
    let firstIndexNumOfOccur = 0;
    let secondIndexNumOfOccur =0;

    for (let i = 0; i < idsDoubleArray.length; i++) {
      if (idsDoubleArray[i][0] === selectedIdArray[0]) {
        firstIndexNumOfOccur++;
      } else if (idsDoubleArray[i][1] === selectedIdArray[1]) {
        secondIndexNumOfOccur++;
      }
  }

  return Math.max(firstIndexNumOfOccur, secondIndexNumOfOccur) >= 4;
}


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
