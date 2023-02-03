import React, { useRef, useEffect } from 'react';
import Konva from 'konva';

import Grid_layer from 'sheetCore/components/grid_class';


let grid: any = '';


const Sheet = React.forwardRef<HTMLImageElement>((props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);


  const draw = () => {
    // first we need to create a stage
    const stage = new Konva.Stage({
      container: 'stage', // id of container <div>
      width: window.innerWidth,
      height: window.innerHeight,
    });

    grid = new Grid_layer(stage);
    grid.render_layer();
  };
  useEffect(() => {
    if (canvasRef.current) {
      draw();
    }
  }, []);


  return (
    <div>

      <div onClick={() => {
        grid.grid_layer.clear();
        setTimeout(() => {
          grid.render_layer();
        }, 1000);
      }}
      >clear
      </div>

      <div ref={canvasRef} id="stage" />
    </div>);
});
export default Sheet;
