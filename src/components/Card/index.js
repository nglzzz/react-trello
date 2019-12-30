import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './styled';

export default class Card extends React.Component {
  render() {
    return (
      <Item>{this.props.children}</Item>
    );
  };
}
