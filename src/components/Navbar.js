import { Component } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { MenuItems } from "./Menuitems";
class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
               
                <h1 className="navbar-logo">kerala</h1>
                
                <ul className="nav-menu">
                    {MenuItems.map((item,index) =>{
                        return(
                            <li key={index}>
                            <Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
                            </li>

                        )
                    })}

                   <button>sign up</button>
                </ul>

            </nav>
        );
    }
}
 export default Navbar;