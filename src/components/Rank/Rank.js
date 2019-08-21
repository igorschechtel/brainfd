import React, { Component } from 'react';
import './Rank.css';

class Rank extends Component {
  render() {
    return (
      <h1 className='display-4 ml-3'>
        Welcome <strong>Igor</strong>. Your current rank is <strong>#1</strong>.
      </h1>
    );
  }
}

export default Rank;
