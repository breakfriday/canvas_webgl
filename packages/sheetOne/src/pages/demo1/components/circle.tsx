import React, { useRef, useEffect } from 'react';
import useForwardRef from 'sheetCore/hooks/useForwardRef';


export interface circleProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  x?: number;
  y?: number;
  radius?: any;
  color?: any;
}

const Circle = React.forwardRef<HTMLImageElement, circleProps>((props, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const targetRef = useForwardRef(ref);


  const { x, y, radius, color } = props;

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    // r * sin(fc * k)^2
    ctx.arc(x, y, radius * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  };
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      let frameCount = 0;
      let animationFrameId;

      if (ctx) {
        const render = () => {
          frameCount++;
          draw(ctx, frameCount);
          animationFrameId = window.requestAnimationFrame(render);
        };
        render();
      }
      return () => {
        debugger;
        window.cancelAnimationFrame(animationFrameId);
      };
    }
  }, [x, y, radius, color]);


  return <canvas ref={canvasRef} width={300} height={300} />;
});
export default Circle;
