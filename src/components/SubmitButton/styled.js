import styled from 'styled-components';
import MaterialButton from '@material-ui/core/Button/Button';
import {AppContainer} from '../../containers/App/styled.js';

export const StyledButton = styled(MaterialButton)`
  ${AppContainer} & {
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
