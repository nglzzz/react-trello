import styled from 'styled-components';
import MaterialButton from '@material-ui/core/Button/Button';
import {Window} from "../ModalWindow/styled";

export const StyledButton = styled(MaterialButton)`
  ${Window} & {
    background-color: #5aac44;
    min-width: 54px;
    color: #fff;
    text-transform: none;
    font-weight: 400;
    
    &:hover {
      background-color: #61bd4f;
    }
  }
`;
