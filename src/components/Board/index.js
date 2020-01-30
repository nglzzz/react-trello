import React from 'react';
import BoardHeader from '../BoardHeader';
import BoardBody from '../BoardBody';
import ModalWindow from '../ModalWindow';

const Board = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="board">
      <BoardHeader />
      <BoardBody showModal={() => setShowModal(true)} />

      {showModal && <ModalWindow hideModal={() => setShowModal(false)} />}
    </div>
  );
};

export default Board;
