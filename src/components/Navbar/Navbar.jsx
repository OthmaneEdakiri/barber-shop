import { useContext } from "react";
import { logo } from "../../assets";
import { navLinks } from "../../constants";
import "./Navbar.css";
import { ToggleContext } from "../../App";



const Navbar = () => {
    const {toggle} = useContext(ToggleContext)

    const {linkActive} = useContext(ToggleContext)

    return (
        <>  
            <div className={`navbar-sm ${toggle && 'navbar-active'}`}>
                <div className="navbar-content">
                    <img src={logo} alt="" className="nav-logo" />
                    <ul className="navbar-links">
                        {navLinks.map(navlink=><li key={navlink.id}><a className={navlink.id === linkActive?"active":null} href={`#${navlink.id}`}>{navlink.title}</a></li>)}
                    </ul>
                </div>
            </div>
            <div className='navbar'>
                <div className="navbar-content">
                    <img src={logo} alt="" className="nav-logo" />
                    <ul className="navbar-links">
                        {navLinks.map(navlink=><li key={navlink.id}><a className={navlink.id === linkActive?"active":null} href={`#${navlink.id}`}>{navlink.title}</a></li>)}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
