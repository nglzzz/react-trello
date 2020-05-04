import React from 'react';
import * as PropTypes from 'prop-types';
import Card from '../Card';
import NewCardForm from '../NewCardForm';
import {
  AddIcon,
  Content,
  Header,
  Body,
  AddCardLink,
  EditableName,
  Wrapper
} from './styled';

const Lane = ({ title, cards, showModal }) => {
  const bodyRef = React.useRef(null);
  const [isShowedNewForm, setShowNewCardForm] = React.useState(false);

  const showNewCardForm = () => {
    setTimeout(() => bodyRef.current.scrollTop = bodyRef.current.scrollHeight);
    setShowNewCardForm(true);
  }

  return (
    <Wrapper>
      <Content>
        <Header>
          <EditableName defaultValue={title} />
        </Header>
        <Body ref={bodyRef}>
          {cards.map(card => (
            <Card key={card.id} card={card} showModal={showModal}>{card.name}</Card>
          ))}
          {isShowedNewForm && <NewCardForm hideForm={() => setShowNewCardForm(false)} />}
        </Body>
        {!isShowedNewForm && <AddCardLink onClick={showNewCardForm}>
          <AddIcon />
          Add a card
        </AddCardLink>}
      </Content>
    </Wrapper>
  );
};

Lane.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
};

Lane.defaultProps = {
  title: '',
};

export default Lane;
