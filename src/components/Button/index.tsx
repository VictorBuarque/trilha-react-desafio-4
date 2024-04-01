import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled, variant="primary" }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={disabled} variant={variant}>{title}</ButtonContainer>;
};

export default Button;
