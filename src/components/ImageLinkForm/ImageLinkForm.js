import React, { Component } from 'react';
import './ImageLinkForm.css';

class ImageLinkForm extends Component {
  insertMessage(boxes, clicked) {
    if (clicked === false) return null;
    switch (boxes.length) {
      case 0:
        return (
          <h5 className='mt-4 mb-0'>
            Hmm, sorry. I didn't find any faces on this image.
          </h5>
        );
      case 1:
        return (
          <h5 className='mt-4 mb-0'>
            I found <span>one</span> face in this image! Check it below.
          </h5>
        );
      default:
        return (
          <h5 className='mt-4 mb-0'>
            I found <span>{boxes.length}</span> faces in this image! Check them
            below.
          </h5>
        );
    }
  }
  render() {
    const { onInputChange, onButtonSubmit, boxes, clicked } = this.props;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='card mb-2'>
              <div className='card-body'>
                <h5 className='mb-4'>
                  The{' '}
                  <span>
                    Brain<strong>FR</strong>
                  </span>{' '}
                  will detect faces in your pictures. Give it a try.
                </h5>
                <div className='input-group'>
                  <div className='custom-file'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Please enter your image URL'
                      onChange={onInputChange}
                    />
                  </div>
                </div>
                <button
                  className='detect mt-3 mx-auto'
                  onClick={onButtonSubmit}
                >
                  Detect
                </button>
                {this.insertMessage(boxes, clicked)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageLinkForm;
