import React from 'react';
import PropTypes from 'prop-types';
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

export const Card = (props) => {
  const [isOpenLabel, setIsOpenLabel] = React.useState(false);
  const [listLabelsClasses, setListLabelsClass] = React.useState([]);
  const [allowShowingModal, setAllowShowingModal] = React.useState(true);

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
      <ListLabels className={listLabelsClasses.join(' ')}>
        <Label className="green" onClick={toggleOpenLabel} onMouseEnter={onMouseLabelEnter} onMouseLeave={onMouseLabelLeave}>Test</Label>
        <Label className="yellow" onClick={toggleOpenLabel} onMouseEnter={onMouseLabelEnter} onMouseLeave={onMouseLabelLeave}/>
        <Label className="orange" onClick={toggleOpenLabel} onMouseEnter={onMouseLabelEnter} onMouseLeave={onMouseLabelLeave}/>
        <Label className="red" onClick={toggleOpenLabel} onMouseEnter={onMouseLabelEnter} onMouseLeave={onMouseLabelLeave}/>
        <Label className="purple" onClick={toggleOpenLabel} onMouseEnter={onMouseLabelEnter} onMouseLeave={onMouseLabelLeave}/>
        <Label className="blue" onClick={toggleOpenLabel} onMouseEnter={onMouseLabelEnter} onMouseLeave={onMouseLabelLeave}/>
      </ListLabels>
      <Content>{props.children}</Content>
      <Badges>
        <BadgeItem title="You are watching this card">
          <SubscriptionIcon/>
        </BadgeItem>
        <BadgeItem title="This card is due later.">
          <TimerIcon/>
          <BadgeText>Mar 18, 2021</BadgeText>
        </BadgeItem>
        <BadgeItem title="This card has a description">
          <DescriptionIcon/>
        </BadgeItem>
      </Badges>
      <MemberList>
        <Member><Avatar src="https://trello-members.s3.amazonaws.com/55cdf18760c6d02845ac7d8b/f0fcf81508ba6d03489f1eabe461495f/30.png" /></Member>
      </MemberList>
    </Item>
  );
};

Card.propTypes = {
  showModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
