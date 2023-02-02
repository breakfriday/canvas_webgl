import React, { useRef, useEffect } from 'react';
import useForwardRef from 'sheetCore/hooks/useForwardRef';
import Konva from 'konva';

import grid_layer from 'sheetCore/components/grid';




const Sheet = React.forwardRef<HTMLImageElement>((props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);


  const draw = () => {
    // first we need to create a stage
    const stage = new Konva.Stage({
      container: 'stage', // id of container <div>
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const layer = new Konva.Layer();
    stage.add(layer);
    const rects = [];
    const rectWidth = 100;
    const rectHeight = 50;
    const padding = 0;
    const cols = Math.floor(stage.width() / (rectWidth + padding));
    const rows = Math.floor(stage.height() / (rectHeight + padding));
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const rect = new Konva.Rect({
          x: i * (rectWidth + padding),
          y: j * (rectHeight + padding),
          width: rectWidth,
          height: rectHeight,
          fill: 'white',
          stroke: 'lightgray',
          strokeWidth: 1,
          draggable: false,
        });
        rects.push(rect);
        layer.add(rect);
      }
    }
    layer.draw();

    layer.on('mouseover', (evt) => {
      const shape = evt.target;
      document.body.style.cursor = 'pointer';
      shape.fill('#00D2FF');
      layer.draw();
    });
    layer.on('mouseout', (evt) => {
      const shape = evt.target;
      document.body.style.cursor = 'default';
      shape.fill('white');
      layer.draw();
    });

    // rects.forEach((rect) => {
    //   rect.on('mouseover', function () {
    //     document.body.style.cursor = 'pointer';
    //     this.fill('#00D2FF');
    //     layer.draw();
    //   });
    //   rect.on('mouseout', function () {
    //     document.body.style.cursor = 'default';
    //     this.fill('white');
    //     layer.draw();
    //   });
    // });
  };
  useEffect(() => {
    if (canvasRef.current) {
      draw();
    }
  }, []);


  return <div ref={canvasRef} id="stage" />;
});
export default Sheet;
