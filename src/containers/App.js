import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Logo from '../components/Logo/Logo';
import Rank from '../components/Rank/Rank';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';

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

const app = new Clarifai.App({ apiKey: '8ae6df6d8f7545f19a61968334163016' });

class App extends Component {
  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imageUrl: '',
      box: {
        top_row: '',
        right_col: ''
      }
    };
  }

  // Calculate face location
  calculateFaceLocation = data => {
    // Puts first face box locations on a const
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;

    // Gets image element (and its width and height)
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      top: clarifaiFace.top_row * height,
      right: width - clarifaiFace.right_col * width,
      bottom: height - clarifaiFace.bottom_row * height,
      left: clarifaiFace.left_col * width
    };
  };

  displayFaceBox = box => {
    this.setState({ box });
  };

  // Run when 'detect' button pressed
  onButtonSubmit = () => {
    // Sets imageUrl state to whats on input field
    this.setState({
      imageUrl: this.state.input,
      box: {}
    });

    // Send image to Clarifai API and run calculateFaceLocation with the response
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch(err => console.log('Error: ' + err));
  };

  // Updates input state when changed
  onInputChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    return (
      <div className='App'>
        <Particles params={particlesOptions} className='particles' />
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col align-items-center'>
              <Logo />
              <Rank />
            </div>
          </div>
        </div>
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box} />
      </div>
    );
  }
}

export default App;
