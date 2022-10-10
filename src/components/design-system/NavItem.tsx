import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import {  NavLink, useLocation } from "react-router-dom";
import './NavItem.scss';


export interface NavItemProps {
    label: ReactNode;
    to: string;
}


export const NavItem: FunctionComponent<NavItemProps> = ({label, to}) => {
    const {pathname} = useLocation();
    const [isActive, setIsActive]= useState(pathname.includes(to));

    useEffect(() => {
        setIsActive(pathname.includes(to));
    }, [pathname]);

    return  (
        <li className="nav-item">
            <NavLink className={`nav-link${isActive ? ' active' : ''}`} to={to}> {label}</NavLink>
        </li>);
; 
};