import React from 'react';
import logoHorAO from "./Logo_AngelOrtiz_H.png";
import NavBarCss from "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';

export const NavBar = () => {
    return(
        <section className='navBar'>
            <div>
                <img src={logoHorAO} className="logoHorAO" alt="The Art of Angel Ortiz"/>
            </div>
            
            <div>
                <h1 className="navbar-title">The Art Of Angel Ortiz</h1>
            </div>

            <CartWidget/>
            <div>
                <nav className="navbar-navbar">
                    <ul className="navbar-navlink">Home</ul>
                    <ul className="navbar-navlink">About Angel</ul>
                    <ul className="navbar-navlink">Gallery</ul>
                    <ul className="navbar-navlink">Shop Online</ul>
                </nav>
            </div>
        </section>
    )
}