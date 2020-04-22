import styled from 'styled-components';
import { COMMON } from '../../constants/colors';
import MaterialAddIcon from '@material-ui/icons/Add'

export const Wrapper = styled.div`
  width: 272px;
  margin: 0 4px;
  height: 100%;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
`;

export const Content = styled.section`
  max-height: 100%;
  border-radius: 3px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  white-space: normal;
  background-color: #ebecf0;
`;

export const Header = styled.header`
  min-height: 20px;
  padding: 8px 36px 4px 8px;
  position: relative;
  flex: 0 0 auto;
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
  padding: 10px 16px;
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
  min-height: 0;
  margin: 0 4px;
  padding: 0 4px;
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
`;
