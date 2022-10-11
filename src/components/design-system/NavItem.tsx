import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import {  NavLink, useLocation } from "react-router-dom";
import './NavItem.scss';


export interface NavItemProps {
    label: ReactNode;
    to: string;
}


export const NavItem: FunctionComponent<NavItemProps> = ({label, to}) => {
    return  (
        <li className="nav-item">
            <NavLink className='nav-link' to={to}> {label}</NavLink>
        </li>);
; 
};