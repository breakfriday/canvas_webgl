import Konva from 'konva';
import React, { useRef, useEffect } from 'react';
import RacingGame from './components/RaceGame';

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);


  const draw = () => {

  };
  useEffect(() => {
    if (canvasRef.current) {
      const Game = new RacingGame('stage');
      Game.loadImage('https://pic.616pic.com/ys_img/00/07/77/xOsqgV61fT.jpg');
      setTimeout(() => {
        Game.startRace();
        alert(2)
      }, 2000);
    }
  }, []);


  return (
    <>
      <div>

        <div onClick={() => {

        }}
        >start_game
        </div>

        <div ref={canvasRef} id="stage" />
      </div>

    </>
  );
};

export default Home;
