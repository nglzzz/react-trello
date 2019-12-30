import React from 'react';
import './styles.css';
import Lane from '../Lane';

const BoardBody = () => (
  <div className="board-body">
    <Lane title="INFO" />
    <Lane title="ToDo" />
    <Lane title="Development" />
    <Lane title="FINISHED" />
  </div>
);

export default BoardBody;
