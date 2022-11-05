import React from "react";
import "./style.css";

type Props = {
  x: number;
  y: number;
  xOffset: number;
  yOffset: number;
};

export const TouchDragImage: React.FC<Props> = ({ x, y, xOffset, yOffset }) => (
  <div
    id="touch-drag-image"
    style={{
      transform: `translate3d(${x - xOffset}px, ${y - yOffset}px, 0)`,
    }}
  />
);
