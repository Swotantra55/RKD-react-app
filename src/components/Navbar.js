import React from 'react';
import {Link} from 'react-router-dom'
import * as Icons from "react-icons/fa"
import './Navbar.css'
import {navItems} from './Navitems'
import Button from './Button'
//import Navbar from './components/Navbar';


const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="navbar-logo">
            R.K.D
            <Icons.FaBuilding />
        </Link>
        <ul className="nav-items">
            {navItems.map((item)=> {
                return (
                    <li key={item.id} className={item.cName}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                );
            })
            }
        </ul>
            <Button />
    </nav>
    )
}
export default Navbar
