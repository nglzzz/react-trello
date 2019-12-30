import React from 'react';
import { Header, Name, Divider, Team } from './styled.js';

const BoardHeader = () => (
  <Header>
    <Name>Trello Board</Name>
    <Divider />
    <Team>Private Team</Team>
  </Header>
);

export default BoardHeader;
