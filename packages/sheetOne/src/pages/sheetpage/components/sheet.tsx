import React, { useRef, useEffect } from 'react';
import Konva from 'konva';

import Grid_layer from 'sheetCore/components/grid_class';


const Sheet = React.forwardRef<HTMLImageElement>((props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);


  const draw = () => {
    // first we need to create a stage
    const stage = new Konva.Stage({
      container: 'stage', // id of container <div>
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const grid = new Grid_layer(stage);
    grid.render_layer();
  };
  useEffect(() => {
    if (canvasRef.current) {
      draw();
    }
  }, []);


  return <div ref={canvasRef} id="stage" />;
});
export default Sheet;
