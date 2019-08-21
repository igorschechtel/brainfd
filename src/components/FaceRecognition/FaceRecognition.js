import React, { Component } from 'react';
import './FaceRecognition.css';

class FaceRecognition extends Component {
  render() {
    const { imageUrl, box } = this.props;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            {imageUrl === '' ? null : (
              <div className='media-box mb-5'>
                <div className='image-box'>
                  <img id='inputImage' src={imageUrl} alt='sample' />
                </div>
                <div
                  className='bounding-box'
                  style={{
                    top: box.top,
                    right: box.right,
                    left: box.left,
                    bottom: box.bottom
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FaceRecognition;
