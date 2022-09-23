import { FunctionComponent, ReactNode } from "react";
import { Link, NavLink, useLocation, useResolvedPath } from "react-router-dom";
import './NavItem.scss';


export interface NavItemProps {
    label: ReactNode;
    to: string;
}


export const NavItem: FunctionComponent<NavItemProps> = ({label, to}) => {
    // const {pathname, hash, key, search } = useLocation();

    // const isCurrentSelection = pathname === to;

    return  (
        <li className="nav-item">
            <NavLink className='nav-link' to={to}> {label}</NavLink>
        </li>);
; 
};