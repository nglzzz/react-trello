import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

export const Container = styled.div`
  width: 304px;
  display: none;
  display: block;
  overflow: hidden;
  position: absolute;
  top: -9999px;
  top: 0;
  right: -9999px;
  right: 0;
  border-radius: 3px;
  box-shadow: 0 8px 16px -4px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
  background: #fff;
  transform: translateZ(0);
  z-index: 70;
`;

export const Header = styled.div`
  height: 40px;
  position: relative;
  margin-bottom: 8px;
  text-align: center;
`;

export const HeaderTitle = styled.div`
  margin: 0 12px;
  padding: 0 32px;
  display: block;
  overflow: hidden;
  position: relative;
  line-height: 40px;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 1px solid rgba(9,30,66,.13);
  color: #5e6c84;
  z-index: 1;
`;

export const Content = styled.div`
  padding: 0 12px 12px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Close = styled(CloseIcon)`
    ${Header} & {
      width: 40px;
      height: 40px;
      padding: 10px 12px 10px 8px;
      position: absolute;
      top: 0;
      right: 0;
      color: #6b778c;
      z-index: 2;
      cursor: pointer;
      
      &:hover {
        color: #172b4d;
      }
    }
`;
