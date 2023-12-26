import React, { useState } from 'react';
import Kisiler from './Kisiler';
import './App.css';

function App() {
  const [KisileriGoster, setKisileriGoster] = useState(true);

  const temizle = () => {
    setKisileriGoster(false);
  };

  return (
    <div className="govde">
      <h1>{KisileriGoster ? "5" : "0"} birthdays today</h1>
      {KisileriGoster && <Kisiler />}
      <button className="buton" onClick={temizle}>
        Clear All
      </button>
    </div>
  );
}

export default App;
