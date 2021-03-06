import styled from 'styled-components';

export const Button = styled.a`
  min-width: 32px;
  height: 32px;
  display: inline-block;
  border-radius: 3px;
  background-color: hsla(0,0%,100%,.3);
  cursor: pointer;
  
  &:hover {
    background-color: hsla(0,0%,100%,.2);
    color: #fff;
  }
`;
