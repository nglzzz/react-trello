import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, HomeButton, HomeLogo } from './styled.js';

const Header = () => (
  <Wrapper>
    <HomeButton href="/">
      <img src="/media/home.svg" alt=""/>
    </HomeButton>
    <HomeLogo href="/" />
  </Wrapper>
);

Header.defaultProps = {
  logo: '/media/home.svg',
};

Header.propTypes = {
  logo: PropTypes.string,
};

export default Header;
