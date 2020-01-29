import styled from 'styled-components';
import {COMMON} from '../../constants/colors';

export const Button = styled.span`
  padding: 6px 12px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  line-height: 20px;
  border-radius: 3px;
  box-shadow: none;
  border: none;
  color: ${COMMON}
  background-color: rgba(9,30,66,.04);
  cursor: pointer;
  
  &:hover {
    background-color: rgba(9,30,66,.08);
  }
`;
