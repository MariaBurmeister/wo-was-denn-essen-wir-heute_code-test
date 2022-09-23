import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

import './MainHeader.scss';

export const MainHeader = () => {

  return (
    <header className="main-header">
        <Link to="/"><Logo /></Link>
        <Navbar>
            <Navbar.Item label='Home' to='/home'/>
            <Navbar.Item label='Dashboard' to='/dashboard'/>
            <Navbar.Item label='Bad Path' to='/bad_path'/>
        </Navbar>
    </header>
  );
}