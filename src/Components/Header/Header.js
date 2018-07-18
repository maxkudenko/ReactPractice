import React, { Component } from 'react';
import Search from '../Search/Search'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="">EasyGo</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Login</a>
              </li>
            </ul>
          </div>
          <Search />
        </nav>  
      </header>
    )
  }
}

export default Header;