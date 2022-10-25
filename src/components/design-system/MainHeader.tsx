import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { Link, useLocation } from "react-router-dom";

import './MainHeader.scss';
import { SkipNavLink } from "../accesssibility";

export const MainHeader = () => {
  return (
    <header className="main-header" aria-label='main-header'>
        <SkipNavLink/>
        <Link aria-hidden aria-label='home-page' to="/"><Logo /></Link>
        <Navbar navName="primary-navigation" >
            <Navbar.Item label='Home' to='/home'/>
            <Navbar.Item label='Bad Path' to='/bad_path'/>
        </Navbar>
    </header>
  );
}