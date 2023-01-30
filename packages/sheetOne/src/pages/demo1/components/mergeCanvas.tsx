import React, { useRef, useEffect } from 'react';

const MergeCanvases = (c1, c2) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const canvas1 = document.querySelector('#canvas1');
    const canvas2 = document.querySelector('#canvas2');
    ctx.drawImage(canvas1, 0, 0);
    ctx.drawImage(canvas2, 100, 100);
  }, []);

  return (
    <div>
      <Canvas id="canvas1" width={100} height={100} color="red" />
      <Canvas id="canvas2" width={100} height={100} color="blue" />
      <canvas ref={canvasRef} width={300} height={300} />
    </div>
  );
};

export default MergeCanvases;

