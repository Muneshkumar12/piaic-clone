import React from 'react';
import '../../styles/footer.css';
import { IoIosCall, IoLogoYoutube } from "react-icons/io";
import { AiFillFacebook } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import footerImage from '../../images/panacloudfootericon.png';

const Footer = ({ footerHide }) => {
    const navigate = useNavigate();

    return (
        <>
            {!footerHide &&
                <div id='footer-main' className='container-fluid'>
                    <div className='container footer-container'>
                        <div className='row'>
                            <div className='col-12 col-md-4 footer-colum-first'>
                                <h5 className='footer-heading'>Navigation</h5>
                                <Link to="/" className="footer-anchor">Home</Link>
                                <Link to="/" className="footer-anchor">Apply</Link>
                                <Link to="/howitworks" className="footer-anchor">How it works</Link>
                                <Link to="/artificial-intelligence" className="footer-anchor">Artificial Intelligence</Link>
                                <Link to="/cloud-native" className="footer-anchor">Cloud Native and Mobile Web Computing</Link>
                                <Link to="/block-chain" className="footer-anchor">Blockchain</Link>
                                <Link to="/iot" className="footer-anchor">Internet of Things and AI</Link>
                                <Link to="/about" className="footer-anchor">About The President</Link>
                                <Link to="/" className="footer-anchor">Management Committee</Link>
                                <Link to="/wit" className="footer-anchor">Women Inclusion in Technology (WIT)</Link>
                            </div>
                            <div className='col-12 col-md-8'>
                                <h5 className='footer-heading'>Location</h5>
                                <h5 className='footer-heading'>PIAIC Helpline</h5>
                                <div id='footer-contact'><IoIosCall className='footer-contact-icon' /><a href="tel:+923082220203" className="footer-anchor">+92-308-2220203 (WhatsApp as well)</a></div>
                                <br />
                                <br />
                                <h5 className='footer-heading'>Connect with us</h5>
                                <div><AiFillFacebook className='footer-contact-icon' /><IoLogoYoutube className='footer-contact-icon' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div className='footer-two container-fluid'>
                <p>Powered by</p>
                <img src={footerImage} alt='footerImage' />
            </div>
        </>
    );
};

export default Footer
