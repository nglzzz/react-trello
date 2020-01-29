import React from 'react';
import * as PropTypes from 'prop-types';
import {
  Container,
  Content,
  Close,
  Header,
  HeaderTitle
} from './styled.js';

export const PopOver = (props) => {
  const handleCloseClick = () => {
    props.togglePopOver();
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>{props.title}</HeaderTitle>
        <span onClick={handleCloseClick}>
          <Close />
        </span>
      </Header>
      <Content>{props.children}</Content>
    </Container>
  );
};

PopOver.propTypes = {
  title: PropTypes.string.isRequired,
  togglePopOver: PropTypes.func.isRequired,
};

export default PopOver;
