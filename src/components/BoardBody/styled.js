import styled from 'styled-components';

export const Body = styled.div`
  max-width: 100%;
  height: calc(100% - 58px);
  margin-bottom: 10px;
  padding: 0 5px 8px 5px;
  white-space: nowrap;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }
  &::-webkit-scrollbar-button {
    width: 4px;
    height: 4px;
    display: block;
  }
  &::-webkit-scrollbar-track-piece {
    border-radius: 4px;
    background: rgba(0,0,0,.15);
  }
  &::-webkit-scrollbar-thumb {
   background: rgb(125, 164, 199);
  }
  &::-webkit-scrollbar-thumb:horizontal,
  &::-webkit-scrollbar-thumb:vertical {
    border-radius: 4px;
  }
`;
