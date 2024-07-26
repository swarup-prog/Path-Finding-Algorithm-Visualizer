interface IButtonProps {
  title: string;
  color?: string;
  onClick: () => void;
}

const Button = ({ title, color = "red", onClick }: IButtonProps) => {
  return (
    <button
      className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
