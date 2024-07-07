interface IButtonProps {
  title: string;
  color?: string;
  onClick: () => void;
}

const Button = ({ title, color = "orange", onClick }: IButtonProps) => {
  return (
    <button
      // style={{ backgroundColor: color ?? "" }}
      className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
