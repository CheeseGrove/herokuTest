import React, { useState } from 'react';
import './App.css';

function App() {

  const [num, setNum] = useState(null);
  const [showSecret, setShowSecret] = useState(false);
  const [wrongPass, setWrongPass] = useState(false);

  function doSomething() {
    
    if(num == "puma") {
      setShowSecret(true);
      setWrongPass(false);
    } else {
      setWrongPass(true);
      setShowSecret(false);
    }
    
  }

  function secretMessage() {
    return (
      <p>UwU chan</p>
    );
  }
  function wrongPassword() {
    return(
      <p>Wrong Password</p>
    );
  }

  function handleChange(event) {
    setNum(event.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="Password" value={num} onChange={handleChange}></input>
      <input value="Button" type="submit" onClick={doSomething}></input>
      <div>{showSecret ? secretMessage() : null}</div>
      <div>{wrongPass ? wrongPassword() : null}</div>
    </div>
  );
}

export default App;
