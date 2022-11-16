import React from 'react';
import {Link, NavLink } from 'react-router-dom'
//import { useLocation } from 'react-router-dom';
import * as Icons from "react-icons/fa"
import './Navbar.css'
import {navItems} from './Navitems'
import Button from './Button'
//import Navbar from './components/Navbar';


const Navbar = () => {
    // const location = useLocation()
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
                        <NavLink  to={item.path} >
                            {item.title}
                        </NavLink>
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
