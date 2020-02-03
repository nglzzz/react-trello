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
  return (
    <Container style={props.style}>
      <Header>
        <HeaderTitle>{props.title}</HeaderTitle>
        <span onClick={props.closePopOver}>
          <Close />
        </span>
      </Header>
      <Content>{props.children}</Content>
    </Container>
  );
};

PopOver.propTypes = {
  title: PropTypes.string.isRequired,
  closePopOver: PropTypes.func.isRequired,
  showPopOver: PropTypes.func.isRequired,
};

export default PopOver;
