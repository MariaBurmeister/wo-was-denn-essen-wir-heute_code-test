import { FunctionComponent } from "react";

export type ButtonProps = {
    children?: HTMLCollection | string,
    onClick: (e?: React.MouseEvent) => void
  } & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FunctionComponent<ButtonProps> = ({children, onClick, ...rest}) => {
  return <button className="button" onClick={onClick}  {...rest} >{children}</button>;
}