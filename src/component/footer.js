// Footer.js
import React from 'react';
import "./style.css";
const Footer = () => {
    return (
        <>
            <footer>
                <div className="copyright">
                    &copy; {new Date().getFullYear()} Mubbashir. All rights reserved.
                </div>
            </footer>
        </>

    );
};

export default Footer;
