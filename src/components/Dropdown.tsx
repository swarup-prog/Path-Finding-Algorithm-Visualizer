import { useAppDispatch } from "../app/hooks";
import { setAlgorithm } from "../features/algorithmState/algorithmStateSlice";

interface IDropdownProps {
  label: string;
  items: Item[];
}

type Item = {
  name: string;
  value: string;
};

const Dropdown = ({ label, items }: IDropdownProps) => {
  const dispatch = useAppDispatch();

  const handleOptionClick = (value: string) => dispatch(setAlgorithm(value));

  return (
    <span className="flex gap-2 justify-center items-center">
      <label htmlFor={label} className="font-semibold">
        {label}
      </label>
      <select className="bg-transparent border border-gray-200 rounded p-1 w-20 text-center min-w-fit">
        {items.map((item) => (
          <option
            key={item.value}
            value={item.value}
            onClick={() => handleOptionClick(item.value)}
          >
            {item.name}
          </option>
        ))}
      </select>
    </span>
  );
};

export default Dropdown;
