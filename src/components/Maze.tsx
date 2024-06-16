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

  return initialMaze.map((row, rowIndex) => {
    return (
      <div key={rowIndex} className="flex">
        {row.map((cell, cellIndex) => {
          return (
            <div
              onClick={() => handleCellClick([rowIndex, cellIndex], cell)}
              key={cellIndex}
              className={`w-[60px] h-[60px] border-[1px] border-black flex justify-center items-center
              ${
                String(start) === `${[rowIndex, cellIndex]}`
                  ? "bg-green-500"
                  : String(end) === `${[rowIndex, cellIndex]}`
                  ? "bg-red-500"
                  : ""
              }
                ${isSetMode ? "cursor-pointer hover:bg-orange-500" : ""}
                ${cell === 0 ? "bg-black text-white" : "bg-white  text-black"}
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
