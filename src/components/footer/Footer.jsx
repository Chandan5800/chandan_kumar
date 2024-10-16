import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">Chandan</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#project" className="footer__link">Project</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/chandan61006?igsh=OGQ5ZDc2ODk2ZA==" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=100036461500407" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-facebook"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/chandan-kumar-8a49a4236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-linkedin"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Copyright. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer
