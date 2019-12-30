import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Header = () => (
  <header id="header">
    <a className="homeButton button" href="/">
      <img src="/media/home.svg" alt=""/>
    </a>
    <a href="/" className="homeLogo" />
  </header>
);

Header.defaultProps = {
  logo: '/media/home.svg',
};

Header.propTypes = {
  logo: PropTypes.string,
};

export default Header;
