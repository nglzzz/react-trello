import React from 'react';
import {
  Wrapper,
  Image
} from './styled';
import PropTypes from 'prop-types';

export const CardCover = (props) => {
  return (
    <Wrapper>
      <Image src={props.image} alt="" />
    </Wrapper>
  );
};

CardCover.propTypes = {
  image: PropTypes.string.isRequired,
};

export default CardCover;
