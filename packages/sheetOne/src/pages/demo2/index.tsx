import React, { useEffect, useState } from 'react';
import Konva from 'konva';
import { Stage, Layer, Rect, Text } from 'react-konva';


const ColoredRect = () => {
  const [color_state, set_color_state] = useState('green');

  const handle_click = () => {
    const ramdom_color = Konva.Util.getRandomColor();
    set_color_state(ramdom_color);
  };
  return (
    <Rect
      x={20}
      y={20}
      width={50}
      height={50}
      fill={color_state}
      shadowBlur={5}
      onClick={handle_click}
    />
  );
};

export default ColoredRect;
