import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaTelegram, FaTwitter} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col col-1 col-front'>
                    <h1 className='primary1'>NiftyGPT.<span className='primary3'>ai</span></h1>
                </div>
                <div className='col'>
                    <h5>Support</h5>
                    <span className='bar'></span>
                        <a href='/'>Contact Us</a>
                        <a href='/'>Chat</a>
                        <a href='/'>Help Center</a>
                        <a href='/'>FAQ</a>

                </div>
                <div className='col'>
                    <h5>Developers</h5>
                    <span className='bar'> </span>
                        <a href='/'>Cloud</a>
                        <a href='/'>Commerce</a>
                        <a href='/'>Pro</a>
                        <a href='/'>API</a>
                   
                </div>
                <div className='col'>
                    <h5>Company</h5>
                    <span className='bar'> </span>
                        <a href='/'>About</a>
                        <a href='/'>Information</a>
                        <a href='/'>Legal</a>
                        <a href='/'>Privacy</a>
                </div>
                <div className='col'>
                    <h5>Social</h5>
                    <span className='bar'> </span>
                        <a href='/http://facebook.com/niftygpt'><FaFacebook className='icon'/></a>
                        <a href='/https://x.com/Niftygpt_ai'><FaTwitter className='icon'/></a>
                        <a href='/https://www.linkedin.com/company/phoenix-fintech' target='_blank'><FaLinkedin className='icon'/></a>
                        <a href='/https://t.me/niftygpt_ai'><FaTelegram className='icon'/></a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
