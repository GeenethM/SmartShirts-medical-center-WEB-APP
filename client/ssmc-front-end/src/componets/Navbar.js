import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from 'react';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import Log from '../assets/SSlogo.jpg'

function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidbar = () => setSidebar(!sidebar)
        return(
            <>
            <div className="navbar">
                <Link className="menu-bars">
                    <FaIcons.FaBars onClick={showSidbar}/>
                </Link>
                {/* <div id="nav-log-img">
                    <img src={Log} alt="SSlogo" />
                </div> */}
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-manu-items" onClick={showSidbar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path} >{item.icon}<span>{item.title}</span></Link>
                        </li>
                        )   
                      //below code
                    })}
                </ul>
            </nav>
            </>
        )
    }


export default Navbar;

/*  <SubMenu item={item} key={index} />;

                        */