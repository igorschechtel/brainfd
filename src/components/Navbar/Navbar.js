import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark'>
        <a className='navbar-brand' href='/'>
          Brain<span>FR</span>
        </a>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a className='nav-link' href='/'>
              Sign Out <i className='fas fa-sign-out-alt' />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
