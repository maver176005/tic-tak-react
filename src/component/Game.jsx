import React, { useState } from "react";
import Board from "./Board";
import "./Game.css";
import helpFunc from "../helpFunction";
import { Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const winner = helpFunc(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) {
      return null;
    }
    boardCopy[index] = isNext ? "X" : "0";
    setBoard(boardCopy);
    setIsNext(!isNext);
  };

  const startNewGame = () => {
    return (
      <Button
        variant="outline-primary"
        onClick={() => {
          setBoard(Array(9).fill(null));
        }}
      >
        Очистить поле игры
      </Button>
    );
  };

  return (
    <div className="wrapper">
      {startNewGame()}
      <Board squares={board} click={handleClick} />
      <span className="text">
        {!winner && board.filter((elem) => elem !== null).length === 9
          ? "НИЧЬЯ"
          : { winner }
          ? "Выиграл" + "-" + winner
          : "Сейчас ходит" + "-" + (isNext ? "X" : "0")}
      </span>
    </div>
  );
}
