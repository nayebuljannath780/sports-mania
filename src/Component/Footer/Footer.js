import React from 'react';
import fbIcon from '../../Icon/Facebook.png';
import twitterIcon from '../../Icon/Twitter.png';
import youTubeIcon from '../../Icon/YouTube.png'
import './footer.css';


const Footer = () => {

    return (
        <div className="footer-container">
            <a href="https://www.facebook.com/Arsenal" target="_blank" rel="noopener noreferrer">
                <img src={fbIcon} alt="" />
            </a>
            <a href="https://twitter.com/arsenal" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="" />
            </a>
            <a href="https://www.youtube.com/channel/UCpryVRk_VDudG8SHXgWcG0w" target="_blank" rel="noopener noreferrer">
                <img src={youTubeIcon} alt="" />
            </a>
        </div>
    );
};

export default Footer;