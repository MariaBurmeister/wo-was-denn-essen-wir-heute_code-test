import { Children, cloneElement, DetailedHTMLProps, FunctionComponent, HTMLAttributes, ReactElement} from "react";


import './Navbar.scss';
import { NavItem, NavItemProps } from "./NavItem";


interface NavBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{
    navName?: string;
    children: ReactElement<NavItemProps> | ReactElement<NavItemProps>[];
}

interface ItemComposition {
    Item: FunctionComponent<NavItemProps>;
}



export const Navbar: FunctionComponent<NavBarProps> & ItemComposition = ({navName, children, ...rest}) => {
    
    return (
        <nav className="nav" role='navigation' aria-label={navName} {...rest}>
            <ul>
                {children}
            </ul>
        </nav>
    );
};

Navbar.Item = NavItem;
