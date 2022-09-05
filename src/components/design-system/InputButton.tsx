import { FunctionComponent, InputHTMLAttributes, Key } from "react";

interface InputButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  key?: Key;
}
export const InputButton: FunctionComponent<InputButtonProps> = ({type, children, id, checked, key, ...rest}) => {
    const inputId = id;
    return( 
        <div className="input-as-button">
          <input 
          {...rest}
          id={inputId}
          type={type}
          checked={checked}
         />
          <label htmlFor={inputId} className={checked ? 'label_checked' : ''} >{children}</label>
        </div>
    );
    }