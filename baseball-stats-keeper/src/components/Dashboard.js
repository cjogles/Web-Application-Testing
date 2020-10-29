import React, {useState} from 'react';
import Display from './Display';

const Dashboard = () => {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [hits, setHits] = useState(0);

function addStrike() {
  if (strikes > 2) {
    setBalls(0);
    setStrikes(0);
  }
  if (balls > 3) {
    setBalls(0);
    setStrikes(0);
  }
  setStrikes(strikes + 1);
}

const addBall = () => {
  if (strikes > 2) {
    setBalls(0);
    setStrikes(0);
  }
  if (balls > 3) {
    setBalls(0);
    setStrikes(0);
  }
  setBalls(balls + 1);
}

const addFoul = () => {
  setFouls(fouls + 1);
  if (strikes < 2) {
    setStrikes(strikes + 1);
  }
}

const addHit = () => {
  setHits(hits + 1);
  setBalls(0);
  setStrikes(0);
}

  return (
    <div>
      <button onClick={addStrike}>Strike</button>
      <button onClick={addBall}>Ball</button>
      <button onClick={addFoul}>Foul</button>
      <button onClick={addHit}>Hit</button>
      <Display ballsCount={balls} strikeCount={strikes}/>

    </div>
  );
}

export default Dashboard;
