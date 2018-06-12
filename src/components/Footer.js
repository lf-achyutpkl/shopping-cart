import React, {Component} from 'react';

const Footer = (props) =>{
    return(
        <footer>
            <p className="footer-links">
                <a href="https://github.com/lf-achyutpkl/shopping-cart" target="_blank">View Source on Github</a>
                <span>  /  </span>
                <a href="mailto:achyut.pkl@gmail.com" target="_blank">Need any help?</a>
                <span>  /  </span>
                <a href="https://www.linkedin.com/in/achyutpkl/" target="_blank">Say Hi on Linkedin</a>
                <span>  /  </span>
                <a href="#">Achyut Pokhrel</a>
            </p>
            <p>&copy; 2017 <strong>achyutpkl</strong> - React/Native Developer</p>
        </footer>
    )
};

export default Footer;
