import React from 'react';
import {Link} from 'react-router-dom'
import styles from '../../styles/header.module.css'

function Header(props){
    const{backgroundColor, color}=props

    return (
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
                    <a 
                        href="https://github.com/gtoootg0131/Portfolio-Toppage2"
                        style={{color:color}}
                    > 
                        <i 
                            className="header-logo fab fa-github" 
                            style={{color:color}}
                        />
                    </a>
                    <a 
                        href="https://www.instagram.com/gt.europa/"
                        style={{color:color}}
                    > 
                        <i 
                            className="header-logo fab fa-instagram" 
                            style={{color:color}}
                        />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/%E5%80%AB%E5%AE%8F-%E5%BE%8C%E8%97%A4-37b905218/"
                        style={{color:color}}
                    >
                        <i 
                            className="header-logo fab fa-linkedin" 
                            style={{color:color}}
                        />
                    </a>
              </div>
          </div>
    );
}

export default Header;