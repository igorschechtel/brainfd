import React, { Component } from 'react';
import Tilt from 'react-tilt';
import brain from './brain-icon-png-24.jpg';
import './Logo.css';

class Logo extends Component {
  render() {
    return (
      <Tilt
        className='Tilt d-inline-block float-left m-2'
        options={{ max: 50 }}
      >
        <div className='Tilt-inner'>
          <img src={brain} alt='brain-logo' />
        </div>
      </Tilt>
    );
  }
}

export default Logo;
