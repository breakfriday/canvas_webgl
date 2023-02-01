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

const Sheet = React.forwardRef<HTMLImageElement, circleProps>((props, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);


  const draw = () => {
    // first we need to create a stage
    const stage = new Konva.Stage({
      container: 'stage', // id of container <div>
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const layer = grid_layer();
    stage.add(layer);


    layer.draw();
  };
  useEffect(() => {
    if (canvasRef.current) {
      draw();
    }
  }, []);


  return <div ref={canvasRef} id="stage" />;
});
export default Sheet;
