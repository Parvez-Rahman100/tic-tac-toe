import { useState } from "react";
import CalculateWinner from "./Components/CalculateWinner";
import Square from "./Components/Square";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNextValue, setIsXNextValue] = useState(true);

  const winner = CalculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner is ${winner}`;
  } else {
    status = "Next Player Is" + (isXNextValue ? " X " : " O ");
  }

  const handleClick = (i) => {
    if (squares[i]) {
      return;
    }
    const nextSquare = squares.slice();
    if (isXNextValue) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquares(nextSquare);
    setIsXNextValue(!isXNextValue);
  };
  return (
    <>
      <div>
        <h1 className="text-4xl text-center text-green-600 underline py-3 font-bold">
          {status}
        </h1>
      </div>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default App;
