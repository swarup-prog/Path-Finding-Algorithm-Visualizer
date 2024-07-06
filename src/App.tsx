import Maze from "./components/Maze";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import { setIsSetMode, setSetMode } from "./features/mazeState/mazeStateSlice";
import Input from "./components/Input";
import { getNeighbours } from "./helpers";
import iniitalMaze from "./data/initialMaze";

function App() {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState<string>("");
  const { start, end, isSetMode } = useAppSelector((state) => state.mazeState);

  const handleSet = (type: string) => {
    setMessage(`Click on the cell to set ${type} point!`);
    dispatch(setIsSetMode(true));
    dispatch(setSetMode(type));
  };

  useEffect(() => {
    if (!isSetMode) setMessage("");
  }, [isSetMode]);

  return (
    <div className="flex flex-col justify-center items-center gap-10 ">
      <h1 className="font-bold text-3xl">Path Finding Algorithm Visualizer</h1>
      <span>{JSON.stringify(getNeighbours(iniitalMaze, [1, 1]))}</span>
      <section className="flex flex-col items-center justify-center gap-3">
        <div className="flex gap-3">
          <Input disabled label="Start:" value={String(start)} />
          <Input disabled label="End:" value={String(end)} />
        </div>
        <div className="flex gap-3">
          <Button title="Set Start" onClick={() => handleSet("start")} />
          <Button title="Set End" onClick={() => handleSet("end")} />
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
