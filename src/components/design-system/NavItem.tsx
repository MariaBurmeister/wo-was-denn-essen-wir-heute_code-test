import {FunctionComponent, ReactNode} from "react";
import {  NavLink, NavLinkProps } from "react-router-dom";
import './NavItem.scss';


export interface NavItemProps extends Partial<NavLinkProps> {
    label: ReactNode;
    to: string;
}


export const NavItem: FunctionComponent<NavItemProps> = ({label, to, ...rest}) => {
    return  (
        <li className="nav-item">
            <NavLink className='nav-link' to={to} {...rest}> {label}</NavLink>
        </li>);
; 
};