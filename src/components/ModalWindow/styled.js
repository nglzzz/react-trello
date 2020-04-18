import styled from 'styled-components';
import MaterialCloseIcon from '@material-ui/icons/Close';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: fixed;
  position: fixed;
  left: 0;
  top: 0;
  overflow-x: hidden;
  overflow-y: auto;
  align-items: flex-start;
  justify-content: center;
  background-color: rgba(0,0,0,.64);
  z-index: 20;
`;

export const WindowCloser = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Window = styled.div`
  width: 768px;
  max-width: calc(100% - 20px);
  min-height: 500px;
  margin: 48px 0 80px;
  padding: 16px;
  display: table;
  position: relative;
  border-radius: 2px;
  overflow: hidden;
  background-color: #f4f5f7;
  z-index: 25;
`;

export const WindowContainer = styled.div`
  margin: 1px 0 0 32px;
  
  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;

export const CloseIcon = styled(MaterialCloseIcon)`
  margin: 4px;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  overflow: hidden;
  fill: #42526e;
  transition: background-color 85ms,color 85ms;
  z-index: 2;
  cursor: pointer;
  
  ${Window} & {
    width: 40px;
    height: 40px;
  }
  
  &:hover {
    background-color: rgba(9,30,66,.08);
  }
`;
