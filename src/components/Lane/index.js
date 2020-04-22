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

const Lane = ({ title, showModal }) => {
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
          <Card showModal={showModal} image="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x286/20e237e479a0d269de5828c9b570d042/photo-1501854140801-50d01698950b.jpg">Test Test Test Test Test Test Test Test Test Test Test Test Test Test</Card>
          <Card showModal={showModal}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum ante in justo volutpat, non consequat orci rutrum. Quisque cursus lectus gravida congue sagittis. Nulla facilisi. Pellentesque et aliquet arcu. Donec viverra ligula sit amet urna ultricies, quis commodo arcu pellentesque. Vestibulum eleifend neque et posuere feugiat. Quisque nibh diam, maximus quis tincidunt in, pulvinar at odio. Donec non dictum massa. Quisque venenatis risus et arcu aliquet pretium. Ut dictum porta ante, vel maximus nunc vestibulum sit amet. In eleifend lacus erat, quis suscipit eros volutpat ut.</Card>
          <Card showModal={showModal}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum ante in justo volutpat, non consequat orci rutrum. Quisque cursus lectus gravida congue sagittis. Nulla facilisi. Pellentesque et aliquet arcu. Donec viverra ligula sit amet urna ultricies, quis commodo arcu pellentesque. Vestibulum eleifend neque et posuere feugiat. Quisque nibh diam, maximus quis tincidunt in, pulvinar at odio. Donec non dictum massa. Quisque venenatis risus et arcu aliquet pretium. Ut dictum porta ante, vel maximus nunc vestibulum sit amet. In eleifend lacus erat, quis suscipit eros volutpat ut.</Card>
          <Card showModal={showModal}>ABC</Card>
          <Card showModal={showModal}>ABC</Card>
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
  showModal: PropTypes.func.isRequired,
};

Lane.defaultProps = {
  title: '',
};

export default Lane;
