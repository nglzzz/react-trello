import React from 'react';
import BoardHeader from '../BoardHeader';
import BoardBody from '../BoardBody';
import ModalWindow from '../ModalWindow';

const Board = () => (
  <div className="board">
    <BoardHeader />
    <BoardBody />

    <ModalWindow />
  </div>
);

export default Board;
