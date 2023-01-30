import React, { useRef, useEffect } from 'react';


export interface circleProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  x?: number;
  y?: number;
  radius?: any;
  color?: any;
}

const Circle = React.forwardRef<HTMLImageElement, circleProps>((props, ref) => {
  const canvasRef = useRef(null);

  const { x, y, radius, color } = props;
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }, [x, y, radius, color]);


  return <canvas ref={canvasRef} width={300} height={300} />;
});
export default Circle;
