import React from "react";
import {Link} from "react-router-dom";



const Navbar = ()=>{

    return(
      <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
        <Link className={"navbar-brand"} to="/">KLIPP</Link>
        <button className={"navbar-toggler"} type={"button"} >
          <span className={"navbar-toggler-icon"}>
            <div className={"burger-piece"}></div>
            <div className={"burger-piece"}></div>
            <div className={"burger-piece"}></div>
          </span>
        </button>
        <div className={"collapse navbar-collapse"} id={"navbarNavAltMarkup"}>
          <div className={"navbar-nav"}>
              <Link className={"nav-item active"} to="/">Home</Link>
              <Link className={"nav-item"} to="/card">Features</Link>
              <Link className={"nav-item"} to="/bookings">Booking</Link>
              <Link className= {"nav-item"} to="/Form">Form</Link>
          </div>
        </div>
        <div className={"mobile-menu"}>
          <Link className={"nav-item active"} to="/">Home</Link>
          <Link className={"nav-item"} to="/card">Features</Link>
          <Link className={"nav-item"} to="/bookings">Booking</Link>
          <Link className= {"nav-item"} to="/Form">Form</Link>
        </div>
      </nav>
    )
}


export default Navbar;