import React from 'react';
import {
  Button
} from './styled';

export const ModalButton = (props) => {
  return (
    <Button {...props}>{props.children}</Button>
  );
};

export default ModalButton;
