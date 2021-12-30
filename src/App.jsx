import logo from './logo.svg';
import './App.css';

// REACT HOOKS
import { useState } from 'react';

// COMPONENTS
import ScoreCard from './components/ScoreCard'

function App() {
  // STATE
  const [scorePlayer1, setScorePlayer1] = useState(0)
  const [scorePlayer2, setScorePlayer2] = useState(2)

  const ubahScorePlayer1 = () => {
    const newScorePlayer1 = scorePlayer1 + 1
    setScorePlayer1(newScorePlayer1)
  }

  const ubahScorePlayer2 = () => {
    const newScorePlayer2 = scorePlayer2 + 1
    setScorePlayer2(newScorePlayer2)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="container text-light">
        <ScoreCard 
          scorePlayer1={scorePlayer1}
          scorePlayer2={scorePlayer2}
          handleChangeScoreP1={ubahScorePlayer1}
          handleChangeScoreP2={ubahScorePlayer2}
        />
      </section>
    </div>
  );
}

export default App;
