import React from 'react';
import { AppContainer } from './styled.js';
import Header from '../../components/Header';
import Board from '../../components/Board';

function App() {
  return (
    <AppContainer maxWidth={false}>
      <Header />
      <Board />
    </AppContainer>
  );
}

export default App;
