import React from 'react';
import PropTypes from 'prop-types';
import { Cover as WindowCover } from './Cover';
import { Header as WindowHeader } from './Header';
import WindowMainColumn from './MainColumn';
import WindowSidebar from './Sidebar';
import {
  CloseIcon,
  Overlay,
  Window,
  WindowContainer,
  WindowCloser
} from './styled.js';
import PopOver from '../PopOver';


export const ModalWindow = (props) => {
  const [isSubscribed, setSubscription] = React.useState(true);
  const [isShowedPopOver, togglePopOver] = React.useState(false);
  const [popOverPosition, changePopOverPosition] = React.useState({});
  const [popOverTitle, setPopOverTitle] = React.useState('');
  const [popOverContent, setPopOverContent] = React.useState(<></>);

  const showPopOver = (event) => {
    togglePopOver(true);
  };

  return (
    <Overlay>
      <WindowCloser onClick={props.hideModal} />
      <Window>
        <span onClick={props.hideModal}>
          <CloseIcon />
        </span>
        <WindowCover />
        <WindowContainer>
          <WindowHeader title={props.title} isSubscribed={isSubscribed} />

          <WindowMainColumn />

          <WindowSidebar
            isSubscribed={isSubscribed}
            setSubscription={setSubscription}
            showPopOver={showPopOver}
            changePopOverPosition={changePopOverPosition}
            setPopOverTitle={setPopOverTitle}
            setPopOverContent={setPopOverContent}
          />
        </WindowContainer>
      </Window>
      {isShowedPopOver && <PopOver
        style={popOverPosition}
        title={popOverTitle}
        showPopOver={showPopOver}
        closePopOver={() => togglePopOver(false)}
      >{popOverContent}</PopOver>}
    </Overlay>
  );
};

export default ModalWindow;

ModalWindow.propTypes = {
  title: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
};

ModalWindow.defaultProps = {
  title: 'Title',
};
