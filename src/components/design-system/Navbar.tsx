import { FunctionComponent, ReactElement} from "react";


import './Navbar.scss';
import { NavItem, NavItemProps } from "./NavItem";


interface NavBarProps {
    navName?: string;
    children: ReactElement<NavItemProps> | ReactElement<NavItemProps>[];
}

interface ItemComposition {
    Item: FunctionComponent<NavItemProps>;
}



export const Navbar: FunctionComponent<NavBarProps> & ItemComposition = ({navName, children}) => {
    
    return (
        <nav className="nav">
            <ul>
                {children}
            </ul>
        </nav>
    );
};

Navbar.Item = NavItem;
