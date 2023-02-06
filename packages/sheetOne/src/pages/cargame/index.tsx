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
      Game.loadImage('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…k93TkdBP2R81sIopH87fMID0EAg/tHeZQDVL2I80AZAf/2Q==');
    }
  }, []);


  return (
    <>
      <div>

        <div onClick={() => {

        }}
        >start_game
        </div>

        <div id="stage" />
      </div>

    </>
  );
};

export default Home;
