import { Loader } from "../Loader/Loader";

interface IButton {
  text: string;
  type: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  onClick?: () => void;
  isLoading?: boolean;
}

const Button = ({ text, disabled, type, onClick, isLoading }: IButton) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {isLoading ? <Loader /> : text}
    </button>
  );
};

export default Button;
