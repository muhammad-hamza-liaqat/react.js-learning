import React from 'react';
import PropTypes from 'prop-types';

export default function NavBar(props) {
  return (
    <>
      <nav className='navbar bg-body-tertiary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href={process.env.REACT_APP_URL_LOGO_HOME}>
            <img
              src='/logo512.png'
              alt='Logo'
              width='30'
              height='24'
              className='d-inline-block align-text-top'
            />
            {props.name}
          </a>
        </div>
      </nav>
    </>
  );
}

// Corrected: Use propTypes instead of prototype
NavBar.propTypes = {
  name: PropTypes.string.isRequired
};
