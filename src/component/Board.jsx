import React from "react";
import "./Board.css";
import Square from "./Square";

export default function Board({ squares, click }) {
  return (
    <div className="board">
      {squares.map((item, i) => (
        <Square
          key={i}
          value={item}
          onClick={() => {
            click(i);
          }}
        />
      ))}
    </div>
  );
}
