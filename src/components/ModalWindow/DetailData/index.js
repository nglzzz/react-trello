import React from 'react';
import PropTypes from 'prop-types';
import {
  AddButton,
  Item,
  Label,
  Member,
  StyledDetailsData,
  Title
} from './styled';

export const DetailData = () => {
  return (
    <StyledDetailsData>
      <Item>
        <Title>Members</Title>
        <div>
          <Member><img src="https://trello-avatars.s3.amazonaws.com/f0fcf81508ba6d03489f1eabe461495f/30.png" /></Member>
          <span>
            <AddButton className="circle" />
          </span>
        </div>
      </Item>
      <Item>
        <Title>Labels</Title>
        <Label className="green" />
        <Label className="yellow" />
        <Label className="orange" />
        <Label className="red" />
        <Label className="purple" />
        <Label className="blue" />
        <span>
          <AddButton />
        </span>
      </Item>
    </StyledDetailsData>
  );
};

export default DetailData;
