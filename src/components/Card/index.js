import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Label,
  ListLabels
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
      {props.children}
    </Item>
  );
};

Card.propTypes = {
  showModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
