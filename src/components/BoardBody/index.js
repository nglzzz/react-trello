import React from 'react';
import PropTypes from 'prop-types';
import {
  Body
} from './styled.js';
import Lane from '../Lane';
import AddLane from '../AddLane';
import {board as boardData} from '../../stores/board';

const BoardBody = (props) => {

  const getCardsByLane = (list) => boardData.cards.filter(card => card.listId === list.id);

  return (
    <Body>
      {boardData.lists.map(list => (
        <Lane key={list.id} title={list.name} cards={getCardsByLane(list)} showModal={props.showModal} />
      ))}
      <AddLane />
    </Body>
  );
};

BoardBody.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default BoardBody;
