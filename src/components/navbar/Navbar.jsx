import React, { useState, Fragment } from 'react';
import "./navbar.css";
import { RiMenuAddLine, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/GPT-3.svg";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const navLinks = (
        <Fragment>
            <p><a href='#home'>Home</a></p>
            <p><a href='#wgpt3'>What is GPT?</a></p>
            <p><a href='#home'>Open AI</a></p>
            <p><a href='#home'>Case Studies</a></p>
            <p><a href='#home'>Library</a></p>
        </Fragment>
    );

    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='gpt3__navbar-links_container'>
                    {navLinks}
                </div>
            </div>
            <div className='gpt3__navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
            <div className='gpt3__navbar-menu'>
                {toggleMenu ?
                    <RiCloseLine color='#fff' size={27} onClick={() => { setToggleMenu(false) }} /> :
                    <RiMenuAddLine color='#fff' size={27} onClick={() => { setToggleMenu(true) }} />
                }
                {toggleMenu && (
                    <div className='gpt3__navbar-menu_container scale-up-center'>
                        <div className='gpt3__navbar-menu_container-links'>
                            {navLinks}
                            <div className='gpt3__navbar-menu_container-links-sign'>
                                <p>Sign in</p>
                                <button type='button'>Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;