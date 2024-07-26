import { useAppDispatch } from "../app/hooks";
import { setAlgorithm } from "../features/algorithmState/algorithmStateSlice";

interface IDropdownProps {
  label: string;
  items: Item[];
  defaultValue?: string;
}

type Item = {
  name: string;
  value: string;
};

const Dropdown = ({ label, items, defaultValue }: IDropdownProps) => {
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    console.log("value: ", value);
    dispatch(setAlgorithm(value));
  };

  return (
    <span className="flex gap-2 justify-center items-center">
      <label htmlFor={label} className="font-semibold">
        {label}
      </label>
      <select
        id={label}
        className="bg-transparent border border-gray-200 rounded p-1 w-20 text-center min-w-fit"
        defaultValue={defaultValue}
        onChange={handleChange}
      >
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </span>
  );
};

export default Dropdown;
