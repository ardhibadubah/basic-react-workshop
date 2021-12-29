import logo from './logo.svg';
import './App.css';

// REACT HOOKS
import { useState } from 'react';

function App() {
  // STATE
  const [scorePlayer1, setScorePlayer1] = useState(0)
  const [scorePlayer2, setScorePlayer2] = useState(0)

  const ubahScorePlayer1 = () => {
    const newScorePlayer1 = scorePlayer1 + 1
    setScorePlayer1(newScorePlayer1)
  }

  const ubahScorePlayer2 = () => {
    const newScorePlayer2 = scorePlayer2 + 1
    setScorePlayer2(newScorePlayer2)
  }

  console.log("=== STATE BERUBAH, REACT RENDER ULANG === ")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="container text-light">
        <div className="card bg-dark d-flex flex-row align-items-center justify-content-around p-5">

          <div className="d-flex flex-column mx-2">
            <img src="https://ssl.gstatic.com/onebox/media/sports/logos/kErkaIWGPh_VGrd4T6NwUA_96x96.png" alt="bendera" />
            <h2> Indonesia </h2>
            <button className="btn btn-primary" onClick={ubahScorePlayer1}>
              Tambah Score
            </button>
          </div>

          <div className="mx-2">
            <span className="display-6"> { scorePlayer1 } </span>
          </div>

          <h2 className="mx-2"> - </h2>
          
          <div className="mx-2">
            <span className="display-6"> { scorePlayer2 } </span>
          </div>

          <div className="d-flex flex-column mx-2">
            <img src="https://ssl.gstatic.com/onebox/media/sports/logos/aEBU_ri8U6F06oTqWmKY5g_96x96.png" alt="bendera" />
            <h2> Thailand </h2>
            <button className="btn btn-primary" onClick={ubahScorePlayer2}>
              Tambah Score
            </button>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default App;
