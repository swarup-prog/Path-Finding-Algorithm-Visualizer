import Maze from "./components/Maze";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import {
  clearMazeState,
  setIsSetMode,
  setSetMode,
} from "./features/mazeState/mazeStateSlice";
import Input from "./components/Input";
import iniitalMaze from "./data/initialMaze";
import { breadthFirstSearch, depthFirstSearch } from "./functions";
import {
  clearAlgorithmState,
  setResult,
} from "./features/algorithmState/algorithmStateSlice";
import Dropdown from "./components/Dropdown";
import { Cell } from "./types";
import { compareArrays } from "./helpers";

function App() {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState<string>("");
  const { start, end, isSetMode } = useAppSelector((state) => state.mazeState);
  const { algorithm } = useAppSelector((state) => state.algorithmState);

  const algorithms = [
    { name: "Breadth First Search", value: "BFS" },
    { name: "Depth First Search", value: "DFS" },
  ];

  const handleSet = (type: string) => {
    setMessage(`Click on the cell to set ${type} point!`);
    dispatch(setIsSetMode(true));
    dispatch(setSetMode(type));
  };

  const handleSearch = () => {
    if (!algorithm) {
      setMessage("Please select an algorithm!");
      return;
    }

    if (compareArrays(start, end)) {
      setMessage("Start and end points can't be the same!");
      return;
    }

    if (compareArrays(start, [0, 0]) || compareArrays(end, [0, 0])) {
      setMessage("Please set valid start or end points!");
      return;
    }

    let result: Cell[] = [];

    if (algorithm === "BFS") {
      result = breadthFirstSearch(iniitalMaze, start, end);
      console.log("Result: ", JSON.stringify(result));
    } else if (algorithm === "DFS") {
      result = depthFirstSearch(iniitalMaze, start, end);
      console.log("Result: ", JSON.stringify(result));
    }
    dispatch(setResult(result));
    return;
  };

  const handleReset = () => {
    dispatch(clearAlgorithmState());
    dispatch(clearMazeState());
  };

  useEffect(() => {
    if (!isSetMode) setMessage("");
  }, [isSetMode]);

  return (
    <div className="flex flex-col justify-center items-center gap-10 ">
      <h1 className="font-bold text-3xl">Path Finding Algorithm Visualizer</h1>
      <section className="flex flex-col items-center justify-center gap-3">
        <div className="flex flex-col gap-5 mb-5">
          <div className="flex gap-3">
            <Input disabled label="Start:" value={String(start)} />
            <Input disabled label="End:" value={String(end)} />
          </div>
          <div>
            <Dropdown label="Algorithm" items={algorithms} />
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            title="Set Start"
            color="green"
            onClick={() => handleSet("start")}
          />
          <Button title="Set End" onClick={() => handleSet("end")} />
          <Button
            color="green"
            title="Search"
            onClick={() => {
              handleSearch();
            }}
          />
          <Button title="Reset" color="red" onClick={() => handleReset()} />
        </div>
      </section>
      <section>
        {message && <div className="text-orange-500 py-2">{message}</div>}
        <Maze />
      </section>
    </div>
  );
}

export default App;
