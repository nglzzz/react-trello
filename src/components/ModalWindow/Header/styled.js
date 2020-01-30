import styled from 'styled-components';
import CreditCard from '@material-ui/icons/CreditCard';
import Visibility from '@material-ui/icons/Visibility';
import TextareaAutosize from 'react-textarea-autosize';
import {COMMON} from '../../../constants/colors';

export const CardIcon = styled(CreditCard)`
  position: absolute;
  left: -27px;
  top: 5px;
  fill: #42526e;
`;

export const HeaderInline = styled.p`
  width: 100%;
  margin: 0 8px 4px 10px;
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #5e6c84;
  
  a {
    color: #5e6c84;
  }
`;

export const HeaderInlineText = styled.span`
  margin-right: 10px;
  display: inline-block;
`;

export const SubscriptionIcon = styled(Visibility)`
  width: 16px;
  height: 16px;
  vertical-align: middle;
  
  ${HeaderInline} & {
    width: 16px;
    height: 16px;
  }
`;

export const WindowHeader = styled.div`
  padding-right: 30px;
  position: relative;
  line-height: 11px;
  
  svg {
   fill: #42526e;
  }
`;

export const WindowTitle = styled(TextareaAutosize)`
  width: 100%;
  height: 32px;
  max-width: 100%;
  padding: 4px 8px;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 3px;
  box-shadow: none;
  background: transparent;
  color: ${COMMON};
  resize: none;
  outline: none;
  
  &:focus {
    border: none;
    background: #fff;
    box-shadow: inset 0 0 0 2px #0079bf
  }
`;
