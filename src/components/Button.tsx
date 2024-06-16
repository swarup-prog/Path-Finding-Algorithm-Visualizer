interface IButtonProps {
  title: string;
  onClick: () => void;
}

const Button = ({ title, onClick }: IButtonProps) => {
  return (
    <button
      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
