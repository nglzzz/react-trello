import styled from "styled-components";
import ModalButton from '../../ModalButton';

export const WindowSidebar = styled.div`
  width: 176px;
  padding: 0 16px 8px 8px;
  float: right;
  overflow: hidden;
  z-index: 10;
  color: #5e6c84;
`;

export const WindowSidebarButtonSection = styled.div`
  margin-bottom: 22px;
`;

export const Button = styled(ModalButton)`
  ${WindowSidebar} & {
    width: 100%;
    margin-top: 8px;
    
    &.last-item-margin {
      margin-bottom: 8px;
    }
  }
`;

export const WindowSidebarTitle = styled.h3`
  margin-top: 16px;
  margin-bottom: -4px;
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: .04em;
  line-height: 16px;
  text-transform: uppercase;
`;
