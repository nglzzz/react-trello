import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import SubmitButton from '../SubmitButton';
import CloseIcon from '@material-ui/icons/Close';

export const FormWrapper = styled.div`
  padding-bottom: 8px;
  position: relative;
  overflow: hidden;
`;

export const TextArea = styled(TextareaAutosize)`
  min-width: 100%;
  max-width: 100%;
  width: 100%;
  max-height: 162px;
  min-height: 54px;
  margin-bottom: 8px;
  padding: 6px 8px 6px;
  display: block;
  position: relative;
  overflow-y: auto;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);
  outline: none;
  z-index: 10;
`;

export const SubmitButtonStyled = styled(SubmitButton)`
  ${FormWrapper} & {
    padding: 6px 12px;
    line-height: 20px;
  }
`;

export const CloseForm = styled(CloseIcon)`
  ${FormWrapper} & {
    margin: 0 8px;
    cursor: pointer;
    line-height: 32px;
    vertical-align: middle;
    fill: #6b778c;
    
    &:hover {
      fill: #172b4d;
    }
  }
`;
