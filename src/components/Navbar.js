import React, { useState } from 'react'
import { FaBars, FaOutdent, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const scrollToFeatured = () => {
        const signUpSection = document.getElementById('signUp');
        if (signUpSection) {
            const scrollOptions = {
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
                speed: 'slow'
            };
            signUpSection.scrollIntoView(scrollOptions);
        }
    };

    return (
        <div className='header'>
            <div className='container'>
                <h1 className='primary2'>NiftyGPT.<span className='primary21'>ai</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>Featured</a>
                    </li>
                    <li>
                        <a href='/'>Earn</a>
                    </li>
                    <li>
                        <a href='#footer'>Contact</a>
                    </li>
                </ul>
                <div className='btn-group'>
                    <button className='btn' onClick={scrollToFeatured}>Subscribe</button>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#333' }} />) : (<FaOutdent size={20} style={{ color: '#333' }} />)}

                </div>
            </div>
        </div>
    )
}

export default Navbar
