import React, { useState } from "react";
import '../../styles/navbar.css';
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../images/logo.svg';
const Navbar = () => {
    const Nevigate = useNavigate();
    const [openManu, setOPenManu] = useState(false)
    const menuHandle = () => {
        setOPenManu(!openManu)
    }
    return (
        <>
            <div id="navbar">
                <div id="nav-logo"><img src={logo} onClick={()=>Nevigate("/")} alt="logo"/></div>
                {openManu ? <GrClose className="menu-icons" onClick={menuHandle} /> : <FiMenu className="menu-icons" onClick={menuHandle} />}
                <div id="nav-manu">
                    <ul id={`${openManu && "open-nav"}`}>
                        <li>
                            <Link to="/howitworks" className="link">How it works</Link>
                        </li>
                        <li>
                            <Link to="/" className="link">Apply</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Available program
                            </a>
                            <ul className="dropdown-menu dropdown-menu-start mt-3" aria-labelledby="navbarDropdown" mt="20px">
                                <li className="dropdown-item"> <Link to="/artificial-intelligence" className="link">Artificial Intelligence</Link></li>
                                <li className="dropdown-item"> <Link to="/cloud-native" className="link">Cloud Native and Mobile Web Computing </Link></li>
                                <li className="dropdown-item"> <Link to="/block-chain" className="link">Blockchain</Link> </li>
                                <li className="dropdown-item"> <Link to="/iot" className="link">Internet of things</Link></li>
                                <li className="dropdown-item"> <Link to="/" className="link">Certified Cloud Applied Generative AI Engineer (GenEng)</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About
                            </a>
                            <ul className="dropdown-menu dropdown-menu-about dropdown-menu-start mt-3" aria-labelledby="navbarDropdown" mt="20px">
                                <li className="dropdown-item"> <Link to="/about" className="link">The President</Link></li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/" className="link">WIT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar;