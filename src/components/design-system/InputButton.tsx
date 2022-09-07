import { FunctionComponent, InputHTMLAttributes, Key } from "react";
interface InputButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  key?: Key;
}
export const InputButton: FunctionComponent<InputButtonProps> = ({type, children, checked, onChange, ...rest}) => {
    
    return( 
          <label  className={`input-as-button ${checked ? 'label_checked' : ''}`} >
            {children}
          <input 
          {...rest}
          type={type}
          checked={checked}
          onChange={onChange}
         />
          </label>
    );
}