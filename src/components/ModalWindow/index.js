import React from 'react';
import { Overlay, Window } from './styled.js';

export const ModalWindow = () => {
  return (
    <Overlay>
      <Window>Modal Test</Window>
    </Overlay>
  );
};

export default ModalWindow;
