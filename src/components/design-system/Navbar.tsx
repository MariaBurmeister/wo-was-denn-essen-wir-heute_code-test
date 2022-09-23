import React, { FunctionComponent, ReactElement, useState } from "react";

import {useParams} from 'react-router-dom';

import './Navbar.scss';
import { NavItem, NavItemProps } from "./NavItem";


interface NavBarProps {
    navName?: string;
    children: ReactElement<NavItemProps> | ReactElement<NavItemProps>[];
}

interface ItemComposition {
    Item: FunctionComponent<NavItemProps>;
}

const NavBarContext = React.createContext({});

export interface TabsContext {
    activeTab: string | undefined;
    setActiveTab: (label: string) => void;
    resetTabs?: () => void;
}
  
export const NavTabContext = React.createContext<TabsContext | undefined>(undefined);
  

export const Navbar: FunctionComponent<NavBarProps> & ItemComposition = ({navName, children}) => {
    // const [activeTab, setActiveTab] = useState<string | undefined>(undefined);

    // const {} = useParams();

    return (
        <nav className="nav">
            <ul>
                {/* <NavBarContext.Provider value={{ activeTab: activeTab, setActiveTab}}> */}
                    {children}
                {/* </NavBarContext.Provider> */}
            </ul>
        </nav>
    );
};

Navbar.Item = NavItem;
