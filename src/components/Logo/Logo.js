import React, { Component } from 'react';
import Tilt from 'react-tilt';
import brain from './brain-icon-png-24.jpg';
import './Logo.css';

class Logo extends Component {
  render() {
    return (
      <Tilt className='Tilt mx-3 d-inline-block' options={{ max: 50 }}>
        <div className='Tilt-inner'>
          <img src={brain} alt='brain-logo' />
        </div>
      </Tilt>
    );
  }
}

export default Logo;
