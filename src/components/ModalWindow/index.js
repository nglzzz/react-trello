import React from 'react';
import { Header as WindowHeader } from './Header';
import WindowMainColumn from './MainColumn';
import WindowSidebar from './Sidebar';
import {
  Overlay,
  Window,
  WindowContainer
} from './styled.js';
import PopOver from '../PopOver';


export const ModalWindow = () => {
  const [isSubscribed, setSubscription] = React.useState(true);
  const [showPopOver, togglePopOver] = React.useState(false);

  return (
    <Overlay>
      <Window>
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
