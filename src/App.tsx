import React from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import './App.scss';

const App: React.FC = () => {
  const changeLayers = (shape: any) => {
    shape.moveToTop();
    shape.getLayer().batchDraw();
  };

  return (
    <div className="box">
      <Stage width={400} height={400}>
        <Layer>
          <Rect
            x={0}
            y={0}
            width={200}
            height={400}
            fill="#5f488a"
          />
          
          <Rect
            x={200}
            y={0}
            width={200}
            height={400}
            fill="#fddc22"
          />
        </Layer>
        <Layer>
          <Rect
            x={100}
            y={50}
            width={25}
            height={25}
            fill="#fddc22"
            draggable
            dragBoundFunc={(pos) => ({
              x: Math.min(Math.max(pos.x, 0), 175),
              y: Math.min(Math.max(pos.y, 0), 375),
            })}
            onMouseDown={(e) => changeLayers(e.target)}
          />
          
          <Rect
            x={240}
            y={300}
            width={25}
            height={25}
            fill="#5f488a"
            draggable
            dragBoundFunc={(pos) => ({
              x: Math.min(Math.max(pos.x, 200), 375),
              y: Math.min(Math.max(pos.y, 0), 375),
            })}
            onMouseDown={(e) => changeLayers(e.target)}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default App;