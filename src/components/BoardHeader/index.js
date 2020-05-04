import React from 'react';
import {
  Button,
  Divider,
  Header,
  Name,
  Team,
  StarIcon
} from './styled.js';

const BoardHeader = () => (
  <Header>
    <Name defaultValue="My" />
    <Button><StarIcon /></Button>
    <Divider />
    <Button>Personal</Button>
    <Team>Private Team</Team>
  </Header>
);

export default BoardHeader;
