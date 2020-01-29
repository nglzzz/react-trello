import styled from 'styled-components';

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
