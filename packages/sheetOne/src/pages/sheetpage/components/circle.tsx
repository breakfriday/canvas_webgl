import React, { useRef, useEffect } from 'react';
import useForwardRef from 'sheetCore/hooks/useForwardRef';
import Konva from 'konva';

import grid_layer from 'sheetCore/components/grid';


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

  const draw = () => {
    // first we need to create a stage
    const stage = new Konva.Stage({
      container: 'stage', // id of container <div>
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const layer = grid_layer();
    stage.add(layer);

    const cellSize = 60;
    const gridSize = 100;


    layer.draw();
  };
  useEffect(() => {
    if (canvasRef.current) {
      draw();
    }
  }, [x, y, radius, color]);


  return <div ref={canvasRef} width={1000} height={300} id="stage" />;
});
export default Circle;
