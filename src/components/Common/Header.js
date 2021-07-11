import React from 'react';
import {Link} from 'react-router-dom'

import styles from '../../styles/header.module.css'

function Header(){
    return (
      // <div className="container">
          <div className={styles.header}>
              <h className={styles.header__title}>Michihiro Goto`s Gallery</h>
              <div className={styles.header__navigation} >
                <span><Link to ="/">Top</Link></span>
                <span><Link to ="/profile">Profile</Link></span>
                <span><a href="https://goto-travels.herokuapp.com/">Portfolio</a></span>         
                <i className="header-logo fab fa-youtube"></i>
                <i className="header-logo fab fa-instagram"></i>
                <i className="header-logo fab fa-linkedin"></i>
              </div>
          </div>
      // </div>
    );
}

export default Header;