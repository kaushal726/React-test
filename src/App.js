import { useState } from 'react';
import './App.css';
import sum from './calcu';
function App() {
  let [add, updatesum] = useState(4);
  {
    function updatesum() {
      return add + 2;
    }
    let x = sum()
    if (x >= add)
      updatesum();
  }
  return (
    <div className="App">
      <h1>Hello World{add}</h1>
    </div>
  );
}

export default App;
