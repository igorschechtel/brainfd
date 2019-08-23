import React, { Component } from 'react';
import './FaceRecognition.css';

class FaceRecognition extends Component {
  insertBoundingBoxes(boxes) {
    return boxes.map(box => {
      return (
        <div
          className='bounding-box'
          style={{
            top: box.top,
            right: box.right,
            left: box.left,
            bottom: box.bottom
          }}
        />
      );
    });
  }

  render() {
    const { imageUrl, boxes, clicked } = this.props;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            {imageUrl === '' || clicked === false ? null : (
              <div className='media-box mb-5'>
                <div className='image-box'>
                  <img id='inputImage' src={imageUrl} alt='sample' />
                </div>
                {this.insertBoundingBoxes(boxes)}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FaceRecognition;
