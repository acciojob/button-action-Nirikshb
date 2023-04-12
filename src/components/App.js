import React, { useState } from 'react';
import './App.css';

function App() {
  const [showPara, setShowPara] = useState(false);

  const handleButtonClick = () => {
    setShowPara(true);
  }

  return (
    <div>
      <button id="click" onClick={handleButtonClick}>Click me</button>
      {showPara ? <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> : null}
    </div>
  );
}

export default App;
