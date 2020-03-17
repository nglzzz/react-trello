import styled from 'styled-components';
import { HeaderButton } from '../HeaderButton';

export const Wrapper = styled.header`
  width: 100%;
  height: 40px;
  padding: 4px;
  position: absolute;
  top: 0;
  background: #026aa7;
`;

export const HomeButton = styled(HeaderButton)`
  padding: 8px;
`;

export const HomeLogo = styled.a`
  width: 80px;
  height: 30px;
  display: block;
  position: absolute;
  left: 50%;
  top: 5px;
  transform: translateX(-50%);
  background-image: url(/media/header-logo.png);
  background-size: 80px 30px;
  opacity: .5;
  
  &:hover {
    opacity: 1
  }
`;
