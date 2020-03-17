import React from 'react';
import {
  BoardWrapper
} from './styled';
import BoardHeader from '../BoardHeader';
import BoardBody from '../BoardBody';
import ModalWindow from '../ModalWindow';

const Board = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <BoardWrapper>
      <BoardHeader />
      <BoardBody showModal={() => setShowModal(true)} />

      {showModal && <ModalWindow hideModal={() => setShowModal(false)} />}
    </BoardWrapper>
  );
};

export default Board;
