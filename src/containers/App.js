import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Logo from '../components/Logo/Logo';
import Rank from '../components/Rank/Rank';
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

const app = new Clarifai.App({
  apiKey: '8ae6df6d8f7545f19a61968334163016'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: ''
    };
  }
  onButtonSubmit = () => {
    console.log('click');
    // app.models
    //   .predict(
    //     Clarifai.FACE_DETECT_MODEL,
    //     // URL
    //     'https://pixel.nymag.com/imgs/daily/science/2016/09/27/27-openness-friends-different-sex-ethnicity-race.w700.h467.jpg'
    //   )
    //   .then(
    //     function(response) {
    //       // do something with response
    //       console.log(response);
    //     },
    //     function(err) {
    //       // there was an error
    //     }
    //   );
  };

  onInputChange = e => {
    console.log(e.target.value);
    this.setState({
      imageUrl: e.target.value
    });
  };

  render() {
    return (
      <div className='App'>
        <Particles params={particlesOptions} className='particles' />
        <Navbar />
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <Logo />
            <Rank />
          </div>
        </div>
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
      </div>
    );
  }
}

export default App;
