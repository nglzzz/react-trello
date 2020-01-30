import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Lane from '../Lane';

const BoardBody = (props) => (
  <div className="board-body">
    <Lane title="INFO" showModal={props.showModal} />
    <Lane title="ToDo" showModal={props.showModal} />
    <Lane title="Development" showModal={props.showModal} />
    <Lane title="FINISHED" showModal={props.showModal} />
  </div>
);

BoardBody.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default BoardBody;
