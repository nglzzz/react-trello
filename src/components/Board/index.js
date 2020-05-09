import React from 'react';
import {
  BoardWrapper
} from './styled';
import BoardHeader from '../BoardHeader';
import BoardBody from '../BoardBody';
import ModalWindow from '../ModalWindow';
import {
  board as boardData
} from '../../stores/board';

const Board = () => {
  const [showModal, setShowModal] = React.useState(false);

  const getBoardData = () => {
    return {
      name: boardData.name,
      teamName: boardData.teamName,
      closed: boardData.closed,
      description: boardData.description,
      subscribed: boardData.subscribed,
      editable: boardData.editable,
      members: boardData.members,
    };
  };

  return (
    <BoardWrapper>
      <BoardHeader data={getBoardData()} />
      <BoardBody showModal={() => setShowModal(true)} />

      {showModal && <ModalWindow hideModal={() => setShowModal(false)} />}
    </BoardWrapper>
  );
};

export default Board;
