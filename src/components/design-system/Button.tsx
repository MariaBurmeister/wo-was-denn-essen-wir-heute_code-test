import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
    onClick: (e?: React.MouseEvent) => void
  } ;

export const Button: FunctionComponent<ButtonProps> = ({children, onClick, ...rest}) => {
  return <button {...rest} className="button" onClick={onClick}   >{children}</button>;
}