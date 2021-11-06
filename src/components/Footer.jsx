/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const Footer = () => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h3>
                <a href="https://www.linkedin.com/in/arik-alexandrov/" target="_blank" >
                    Arik Alexandrov
                </a>
            </h3>
            <h4>
                &nbsp; ⏩ &nbsp;
            </h4>
            <h3>
                <a href="https://www.moveo.group/" target="_blank" >
                    Moveo
                </a>
                &nbsp; {new Date().getFullYear()}
            </h3>
        </div>
    );
};

export default Footer;
