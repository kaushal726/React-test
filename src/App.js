import { useState } from 'react';
import './App.css';
function App() {
  const [randomNumber, setRandomNumber] = useState();
  function generateOtp() {
    let randomNo = Math.floor(Math.random() * 100000);
    setRandomNumber(randomNo);
  }
  return (
    <div className="App">
      <div>
        <h1 className='text-3xl text-center'>OTP Generator</h1>
      </div>
      <div>
        <button onClick={generateOtp}>Generate OTP</button>
        <h1>{randomNumber}</h1>
      </div>
    </div>
  );
}

export default App;
