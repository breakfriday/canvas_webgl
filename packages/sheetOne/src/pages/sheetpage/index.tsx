import Konva from 'konva';
import React, { useRef, useEffect } from 'react';
import Circle from './components/circle';

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return (
    <>
      <Circle x={150} y={150} radius={50} color="red" />
    </>
  );
};

export default Home;
