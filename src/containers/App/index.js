import React from 'react';
import './styles.css';
import Container from '@material-ui/core/Container';
import Header from '../../components/Header';
import Board from '../../components/Board';

function App() {
  return (
    <Container maxWidth={false} disableGutters="0">
      <Header />
      <Board />
    </Container>
  );
}

export default App;
