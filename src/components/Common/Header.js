import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'

function Header(){
    return (
      <div className="container header d-flex justify-content-between align-items-center ">
        <h1 id="index-title">Michihiro Goto`s Gallery</h1>
        <div id="header-menu" className="d-flex align-items-center flex-row">
          <h5 className="m-2"><Link to ="/">Top</Link></h5>
          <h5 className="m-2"><Link to ="/profile">Profile</Link></h5>
          <h5 className="m-2">Portfolio</h5>
         
          <i className="header-logo m-2  fab fa-youtube"></i>
          <i class="header-logo m-2 fab fa-instagram"></i>
          <i class="header-logo m-2 fab fa-linkedin"></i>
       </div>
      </div>
    );
}

export default Header;