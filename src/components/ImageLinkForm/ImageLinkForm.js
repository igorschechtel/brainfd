import React, { Component } from 'react';
import './ImageLinkForm.css';

class ImageLinkForm extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='card mt-3'>
              <h5 className='card-header'>
                This Magic Brain will detect faces in your pictures. Give it a
                try.
              </h5>
              <div className='card-body'>
                <div className='input-group'>
                  <div className='input-group-prepend'>
                    <span
                      className='input-group-text'
                      id='inputGroupFileAddon01'
                    >
                      Image
                    </span>
                  </div>
                  <div className='custom-file'>
                    <input
                      type='file'
                      className='custom-file-input'
                      id='inputGroupFile01'
                      aria-describedby='inputGroupFileAddon01'
                    />
                    <label className='custom-file-label' for='inputGroupFile01'>
                      Choose file
                    </label>
                  </div>
                </div>
                <button className='detect mt-3 mx-auto'>Detect</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageLinkForm;
