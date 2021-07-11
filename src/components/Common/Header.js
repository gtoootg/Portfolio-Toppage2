import React from 'react';
import {Link} from 'react-router-dom'

import styles from '../../styles/header.module.css'

function Header(props){
    const{backgroundColor, color}=props

    return (
      // <div className="container">
          <div 
            className={styles.header}
            style={{
                backgroundColor:backgroundColor,
                color:color
              }}
            >
              <h className={styles.header__title}>Michihiro Goto`s Gallery</h>
              <div className={styles.header__navigation} >
                    <Link to ="/"　style={{color:color}}>
                        <span>Top</span>
                    </Link>
                    <Link to ="/profile"　style={{color:color}}>
                        <span>Profile</span>
                    </Link>
                    <span>
                      <a 
                        href="https://goto-travels.herokuapp.com/"
                        style={{color:color}}
                      >
                      Portfolio
                      </a>
                    </span>     
                <i className="header-logo fab fa-instagram"></i>
                <i className="header-logo fab fa-linkedin"></i>
              </div>
          </div>
      // </div>
    );
}

export default Header;