import styled from 'styled-components';
import { COMMON } from '../../constants/colors';

export const Item = styled.div`
  width: 100%;
  padding: 6px 8px;
  border-radius: 3px;
  min-height: 20px;
  margin-bottom: 8px;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  white-space: normal;
  background-color: #fff;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);
  color: ${COMMON};
  cursor: pointer;
  
  &:hover {
    background-color: #f7f6f6
  }
`;
