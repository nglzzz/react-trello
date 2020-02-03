import React from 'react';
import * as PropTypes from 'prop-types';
import { StyledButton } from './styled.js';

const SubmitButton = (props) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);

SubmitButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default SubmitButton;
