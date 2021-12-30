import logo from './logo.svg';
import './App.css';

// REACT HOOKS
import { useState } from 'react';

// COMPONENTS
import ScoreCard from './components/ScoreCard'

function App() {
  // STATE
  const [scorePlayer1, setScorePlayer1] = useState(0)
  const [scorePlayer2, setScorePlayer2] = useState(0)
  const [alerts, setAlerts] = useState([])

  const ubahScorePlayer1 = () => {
    const newScorePlayer1 = scorePlayer1 + 1
    setScorePlayer1(newScorePlayer1)

    // == ADD NEW ITEM TO ALERT
    // == CONTOH 1
    // const newAlerts = alerts.concat(["Goal by Player 1"])
    // setAlerts(newAlerts)
    // == CONTOH 2
    // const arr = [...alerts]
    // arr.push("Goal by Player 1")
    // setAlerts(arr)
    // == CONTOH 3
    setAlerts([...alerts, "Goal by Player 1"])
  }

  const ubahScorePlayer2 = () => {
    const newScorePlayer2 = scorePlayer2 + 1
    setScorePlayer2(newScorePlayer2)

    // == ADD NEW ITEM TO ALERT
    setAlerts([...alerts, "Goal by Player 2"])
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

        {
          alerts.map((item, idx) => {
            return(
              <div key={"alert-" + idx} className="alert alert-primary">
                {item}
              </div>
            )
          })
        }
      </section>
    </div>
  );
}

export default App;
