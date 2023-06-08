interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success";
  onButtonClick: () => void;
}

const Button = ({
  onButtonClick,
  children,
  color = "primary",
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`btn btn-${color}`}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

export default Button;
