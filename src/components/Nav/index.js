import React from "react";

function Nav() {
  return (
    <header>
        <h1>Dustin Micklos</h1>

        <nav>
            <ul className="nav-bar">
                <li> <a href="#About-Me">About Me</a></li>
                <li> <a href="#Projects">Projects</a></li>
                <li> <a href="#Contact-Me">Contact Me</a></li>
            </ul>
        </nav>
    </header>   
  );
}

export default Nav;