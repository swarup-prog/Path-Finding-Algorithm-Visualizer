import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import initialMaze from "../data/initialMaze";
import {
  setEnd,
  setIsSetMode,
  setSetMode,
  setStart,
} from "../features/mazeState/mazeStateSlice";

const Maze = () => {
  const { setMode, isSetMode, start, end } = useAppSelector(
    (state) => state.mazeState
  );
  const dispatch = useAppDispatch();
  const { result } = useAppSelector((state) => state.algorithmState);
  const cellsRef = useRef<HTMLDivElement[][]>([]);

  const handleCellClick = (cellIndex: [number, number], cellValue: number) => {
    if (!isSetMode) return;

    if (cellValue === 0) {
      alert("You can't set point on wall!");
      return;
    }

    if (setMode === "start") {
      dispatch(setStart(cellIndex));
    } else {
      dispatch(setEnd(cellIndex));
    }
    dispatch(setSetMode(""));
    dispatch(setIsSetMode(false));
  };

  useEffect(() => {
    if (result.length > 0) {
      result.forEach((cell, index) => {
        setTimeout(() => {
          const [rowIndex, cellIndex] = cell;
          cellsRef.current[rowIndex][cellIndex].style.backgroundColor =
            "yellow";
        }, index * 500);
      });
    }
  }, [result]);

  return initialMaze.map((row, rowIndex) => {
    return (
      <div key={rowIndex} className="flex">
        {row.map((cell, cellIndex) => {
          // Initialize the ref array if it's not already initialized
          if (!cellsRef.current[rowIndex]) {
            cellsRef.current[rowIndex] = [];
          }

          return (
            <div
              ref={(el) => (cellsRef.current[rowIndex][cellIndex] = el!)}
              onClick={() => handleCellClick([rowIndex, cellIndex], cell)}
              key={cellIndex}
              className={`w-[60px] h-[60px] border-[1px] border-black flex justify-center items-center
              ${
                !start.includes(0) &&
                String(start) === `${[rowIndex, cellIndex]}`
                  ? "bg-green-500"
                  : !end.includes(0) &&
                    String(end) === `${[rowIndex, cellIndex]}`
                  ? "bg-red-500"
                  : ""
              }
                ${isSetMode ? "cursor-pointer hover:bg-orange-500" : ""}
                ${cell === 0 ? "bg-black text-white" : "text-black"}
                `}
            >
              {rowIndex},{cellIndex}
            </div>
          );
        })}
      </div>
    );
  });
};

export default Maze;
