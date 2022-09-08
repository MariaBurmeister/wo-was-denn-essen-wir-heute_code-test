import { FunctionComponent, InputHTMLAttributes, Key } from "react";
interface InputButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  key?: Key;
}
export const InputButton: FunctionComponent<InputButtonProps> = ({type, children, checked, disabled, onChange, ...rest}) => {
    
    return( 
          <label className={`input-as-button${checked ? ' label_checked' : ''}${disabled ? ' disabled' : ''}`} >
            {children}
          <input 
          {...rest}
          type={type}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
         />
          </label>
    );
}