import React, { useState, useEffect } from 'react';

function Header() {

  return (
    <em>
        <header id="header">
            <h1><a href="index.html">Big Brain</a></h1>
            <nav className="links">
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Become a Merchent</a></li>
                </ul>


            </nav>
            <nav className='links'>
                <ul>
                    <li><a href="#">Log In</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Orders</a></li>
                    <li><a href="#">My Account</a></li>
                </ul>
            </nav>
            <nav className="main">
                <ul>
                    <li className="search">
                        <a className="fa-search" href="#search">Search</a>
                        <form id="search" method="get" action="#">
                            <input type="text" name="query" placeholder="Search" />
                        </form>
                    </li>
                    <li className="menu">
                        <a className="fa-bars" href="#menu">Menu</a>
                    </li>
                </ul>
            </nav>
        </header>

        
        {/* <section>
            <ul className="actions stacked">
                <li><a href="#" className="button large fit">Log In</a></li>
            </ul>
        </section> */}

    </em>

  );
}

export default Header;
