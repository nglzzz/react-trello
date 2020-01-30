import React from 'react';
import PropTypes from 'prop-types';
import { Header as WindowHeader } from './Header';
import WindowMainColumn from './MainColumn';
import WindowSidebar from './Sidebar';
import {
  CloseIcon,
  Overlay,
  Window,
  WindowContainer
} from './styled.js';
import PopOver from '../PopOver';


export const ModalWindow = (props) => {
  const [isSubscribed, setSubscription] = React.useState(true);
  const [showPopOver, togglePopOver] = React.useState(false);

  const hideModalWindow = () => {
    props.hideModal();
  };

  return (
    <Overlay>
      <Window>
        <span onClick={hideModalWindow}>
          <CloseIcon />
        </span>
        <WindowContainer>
          <WindowHeader title="Test" isSubscribed={isSubscribed} />

          <WindowMainColumn />

          <WindowSidebar isSubscribed={isSubscribed} setSubscription={setSubscription} />
        </WindowContainer>
      </Window>
      {showPopOver && <PopOver title='Cover' togglePopOver={() => togglePopOver(false)}>Test</PopOver>}
    </Overlay>
  );
};

export default ModalWindow;

ModalWindow.propTypes = {
  hideModal: PropTypes.func.isRequired,
};
