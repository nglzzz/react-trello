import React from 'react';
import PropTypes from 'prop-types';
import {dateFormat} from 'helpers/date.js';
import {
  Item,
  Label,
  ListLabels,
  Content,
  Badges,
  BadgeItem,
  BadgeText,
  TimerIcon,
  SubscriptionIcon,
  DescriptionIcon,
  MemberList,
  Member,
  Avatar
} from './styled';
import CardCover from '../CardCover';

export const Card = (props) => {
  const [isOpenLabel, setIsOpenLabel] = React.useState(false);
  const [listLabelsClasses, setListLabelsClass] = React.useState([]);
  const [allowShowingModal, setAllowShowingModal] = React.useState(true);
  const dueDate = dateFormat(props.card.dueDate);
  const isDuePast = new Date(props.card.dueDate) < new Date();

  const toggleOpenLabel = () => {
    toggleListLabelsClasses('opened');
    setAllowShowingModal(!allowShowingModal);
    setIsOpenLabel(!isOpenLabel);
  };

  const toggleListLabelsClasses = className => {
    const index = listLabelsClasses.indexOf(className);

    if (index !== -1) {
      setListLabelsClass(listLabelsClasses.filter(item => item !== className));
    } else {
      listLabelsClasses.push(className);
      setListLabelsClass(listLabelsClasses);
    }
  };

  const onMouseLabelEnter = () => {
    const index = listLabelsClasses.indexOf('hover');
    if (index === -1) {
      listLabelsClasses.push('hover');
      setListLabelsClass(listLabelsClasses);
    }
    setAllowShowingModal(false);
  };

  const onMouseLabelLeave = () => {
    setListLabelsClass(listLabelsClasses.filter(item => item !== 'hover'));
    setAllowShowingModal(true);
  };

  const showModal = () => {
    if (allowShowingModal) {
      props.showModal();
    }
  };

  return (
    <Item onClick={showModal}>
      <CardCover image={props.image} />
      <ListLabels className={listLabelsClasses.join(' ')}>
        {props.card.labels.map((label, index) => (
          <Label key={index} className={label.color} onClick={toggleOpenLabel} onMouseEnter={onMouseLabelEnter} onMouseLeave={onMouseLabelLeave}>Test</Label>
        ))}
      </ListLabels>
      <Content>{props.children}</Content>
      <Badges>
        {props.card.subscribed && (
          <BadgeItem title="You are watching this card">
            <SubscriptionIcon/>
          </BadgeItem>
        )}
        {dueDate && (
          <BadgeItem title="This card is due later." className={isDuePast ? 'is-due-past' : ''}>
            <TimerIcon/>
            <BadgeText>{dueDate}</BadgeText>
          </BadgeItem>
        )}
        {props.card.description.trim().length > 0 && (
          <BadgeItem title="This card has a description">
            <DescriptionIcon/>
          </BadgeItem>
        )}
      </Badges>
      <MemberList>
        <Member><Avatar src="https://trello-members.s3.amazonaws.com/55cdf18760c6d02845ac7d8b/f0fcf81508ba6d03489f1eabe461495f/30.png" /></Member>
      </MemberList>
    </Item>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  showModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  image: PropTypes.string,
};

export default Card;
