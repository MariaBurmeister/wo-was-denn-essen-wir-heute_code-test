import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

import './MainHeader.scss';

export const MainHeader = () => {

  return (
    <header className="main-header" aria-label='main-header'>
        <Link aria-label="skip-navigation-link" className="sr-only" to="#main">Skip To Main Content</Link>
        <Link aria-label='home-page' to="/"><Logo /></Link>
        <Navbar navName="primary-navigation" >
            <Navbar.Item label='Home' to='/home'/>
            <Navbar.Item label='Dashboard' to='/dashboard'/>
            <Navbar.Item label='Bad Path' to='/bad_path'/>
        </Navbar>
    </header>
  );
}