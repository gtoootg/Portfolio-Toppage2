import React from 'react';

import ContactForm from './ContactForm';

import styles from '../../styles/footer.module.css'

function FooterLeft(){
    return(
        <div className={styles.footer__left}>
            <ContactForm/>
        </div>
    )
}

function FooterRight(){
    return(
        <div className={styles.footer__right}>
            <h2>Michihiro Goto</h2>
            <h5>Master of Science in Mechanical Engineering</h5>
            <h4>Application and Design Engineer</h4>
            <h4>KOYO Deutschland GmbH</h4>
            <h4>email: michihirogoto@yahoo.co.jp</h4>
            <div className={styles.footer__right__iconContainer}>
                {/* <i className="header-logo fab fa-youtube"></i> */}
                <i className="header-logo fab fa-instagram"></i>
                <i className="header-logo fab fa-linkedin"></i>
            </div>
        </div>
    )
}

function Footer(){
    return (
    //   <div className="container">
          <div className={styles.footer}>
            <FooterLeft/>
            <FooterRight/>
          </div>
    //   </div>
    );
}

export default Footer;