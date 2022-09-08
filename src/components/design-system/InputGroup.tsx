import { Children,cloneElement, FieldsetHTMLAttributes, FunctionComponent, ReactElement, ReactNode } from "react";
import './InputGroup.scss';

interface InputGroupProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
    groupName: string; 
    children: ReactNode;
}

export const InputGroup: FunctionComponent<InputGroupProps> = ({groupName, children, disabled, form, ...rest}) => {
    const childrenWithProps = Children.map(children, (child) => cloneElement(child as ReactElement , {disabled, form}));
      
    return (    
        <fieldset name={groupName} form={form} {...rest}>
            <legend>{groupName}</legend>
            <section className="input_group_content">
                {childrenWithProps}
            </section>
        </fieldset>
    );
};
