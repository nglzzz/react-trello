import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import { COMMON } from '../../constants/colors';

export const AppContainer = styled(Container)`
  #root & {
    padding-left: 0;
    padding-right: 0;
    font-size: 14px;
    color: ${COMMON};
  }
`;

export const Hr = styled.hr`
    width: 100%;
    height: 1px;
    padding: 0;
    border: 0;
    background-color: rgba(9,30,66,.13);
`;
