import styled from 'styled-components';
import { COMMON } from '../../constants/colors';
import MaterialAddIcon from '@material-ui/icons/Add'

export const Content = styled.section`
  width: 272px;
  height: 100%;
  max-height: 100%;
  margin: 0 8px 1em 0;
  padding: 8px;
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  border-radius: 3px;
  box-sizing: border-box;
  background-color: #ebecf0;
`;

export const Header = styled.header`
  width: 100%;
  margin-bottom: 3px;
`;

export const EditableName = styled.textarea`
  width: 100%;
  height: 25px;
  padding: 4px 8px 3px 8px;
  box-shadow: none;
  font-size: 14px;
  font-weight: 600;
  border-radius: 3px;
  border: 0;
  resize: none;
  background: transparent;
  cursor: pointer;
  
  &:focus {
    border: 1px;
    background-color: #fff;
    cursor: text;
  }
`;

export const AddIcon = styled(MaterialAddIcon)``;

export const AddCardLink = styled.div`
    padding: 6px 8px;
    display: block;
    flex: 0 0 auto;
    font-size: 14px;
    text-decoration: none;
    border-radius: 3px;
    color: #5e6c84;
    cursor: pointer;
    
    &:hover {
      background-color: rgba(9,30,66,.08);
      color: ${COMMON};
    }
    
    ${AddIcon} {
      width: 20px;
      height: 20px;
      margin-top: -2px;
      vertical-align: middle;
      fill: #6b778c;
    }
`;

export const Body = styled.div`
  position: relative;
`;
