import React from 'react';
import { Item } from './styled';

export const Card = (props) => {
  return (
    <Item onClick={props.showModal}>{props.children}</Item>
  );
};

export default Card;
