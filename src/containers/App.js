import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 600
      }
    }
  }
};

function App() {
  return (
    <div className='App'>
      <Particles params={particlesOptions} className='particles' />
      <Navbar />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
