interface IInputProps {
  disabled?: boolean | false;
  className?: string;
  name?: string;
  type?: string | "text";
  value: string;
  label: string;
}

const Input = ({
  disabled,
  className,
  type,
  value,
  name,
  label,
}: IInputProps) => {
  return (
    <span className="flex gap-2 justify-center items-center">
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      <input
        disabled={disabled}
        name={name}
        className={`${className} border border-gray-200 rounded p-1 w-20 text-center`}
        type={type}
        value={value}
      />
    </span>
  );
};

export default Input;
