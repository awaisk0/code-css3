import React from 'react';

import './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <section className='group'>
    <input className='form-input' onChange={handleChange} label={label} {...otherProps} />
    {
      label ? 
      (
        <label
          className={
            `${otherProps.value.length ? 'shrink' : ''} form-input-label`
          }
        >
          {label}
        </label>
      ) 
      : null
    }
  </section>
);

export default FormInput;