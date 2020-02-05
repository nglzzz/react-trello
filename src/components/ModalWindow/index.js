import React from 'react';
import PropTypes from 'prop-types';
import useOnclickOutside from 'react-cool-onclickoutside';
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
  const [isShowedPopOver, togglePopOver] = React.useState(false);
  const [popOverPosition, changePopOverPosition] = React.useState({});
  const [popOverTitle, setPopOverTitle] = React.useState('');
  const [popOverContent, setPopOverContent] = React.useState(<></>);
  const windowRef = useOnclickOutside(() => {
    // hideModalWindow();
    // togglePopOver(false);
  });

  const hideModalWindow = () => {
    props.hideModal();
  };

  const showPopOver = (event) => {
    togglePopOver(true);
  };

  return (
    <Overlay>
      <Window ref={windowRef}>
          <span onClick={hideModalWindow}>
            <CloseIcon />
          </span>
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
