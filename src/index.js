import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import Login from './pages/Login'
import reportWebVitals from './reportWebVitals';

const Index = () => {
  const [page, setPage] = useState(0)

  return (
    <>
      <button className="btn btn-primary m-3" onClick={() => setPage(1)}> App.js </button> 
      <button className="btn btn-primary m-3" onClick={() => setPage(2)}> Login.js </button> 
      {
        page === 1 ? <App /> :
        page === 2 ? <Login /> :
        null
      }
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
