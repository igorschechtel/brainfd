import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
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
              <button className='detect mt-3 mx-auto' onClick={onButtonSubmit}>
                Detect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
