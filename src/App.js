import React, { useState, useEffect } from 'react';
import Loom from './Loom.js'
import './App.css';

function App() {

  let [threadingSize, setThreadingSize] = useState(9);
  let [treadlingSize, setTreadlingSize] = useState(7);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowUp') {
          setThreadingSize(threadingSize + 1)
      }
      if (event.key === 'ArrowDown') {
          setThreadingSize(threadingSize - 1);
      }
      if (event.key === 'ArrowRight') {
          setTreadlingSize(treadlingSize + 1);
      }
      if (event.key === 'ArrowLeft') {
          setTreadlingSize(treadlingSize - 1);
      }
    }
    window.addEventListener("keydown", handleKeyPress);
    return () => {
        window.removeEventListener("keydown", handleKeyPress);
    }
  }, [threadingSize, treadlingSize]);


  return (
    <div className="App">
      <Loom height={window.innerHeight} 
            width={window.innerWidth}
            threadingSize={threadingSize}
            treadlingSize={treadlingSize} />
    </div>
  );
}

export default App;
