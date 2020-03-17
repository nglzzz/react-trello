import React from 'react';
import PropTypes from 'prop-types';
import {
  Body
} from './styled.js';
import Lane from '../Lane';
import AddLane from '../AddLane';

const BoardBody = (props) => (
  <Body>
    <Lane title="INFO" showModal={props.showModal} />
    <Lane title="ToDo" showModal={props.showModal} />
    <Lane title="Development" showModal={props.showModal} />
    <Lane title="FINISHED" showModal={props.showModal} />
    <AddLane />
  </Body>
);

BoardBody.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default BoardBody;
