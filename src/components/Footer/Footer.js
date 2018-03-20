import React from 'react';
import Logo from '../Logo';

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <Logo big={true} />

            </div>
            <p className="footer__copyright">
                <small>2018 All Rights Reserved. LIFE2FILM Team.</small>
            </p>
        </footer>
    )
};

export default Footer;