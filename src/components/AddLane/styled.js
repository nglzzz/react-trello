import styled from 'styled-components';
import SubmitButton from '../SubmitButton';
import CloseIcon from '@material-ui/icons/Close';
import MaterialAddIcon from '@material-ui/icons/Add'

export const Wrapper = styled.section`
  width: 272px;
  min-height: 40px;
  padding: 3px 4px;
  display: inline-block;
  border-radius: 3px;
  background-color: hsla(0,0%,100%,.24);
  color: #fff;
  cursor: pointer;
  
  &:hover {
    background-color: hsla(0,0%,100%,.32);
  }
  
  &.form-opened {
    background-color: #ebecf0;
  }
`;

export const AddLabel = styled.div`
  padding: 8px 8px;
`;

export const AddIcon = styled(MaterialAddIcon)`
  margin: -2px 3px 0 0;
  display: inline-block;
  vertical-align: middle;
  fill: #fff;
  
  ${Wrapper} & {
    width: 20px;
    height: 20px;
  }
`;

export const AddForm = styled.form`
  padding: 1px 0;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  margin: 0;
  padding: 8px 12px;
  display: block;
  border: none;
  border-radius: 3px;
  line-height: 20px;
  box-shadow: inset 0 0 0 2px #0079bf;
  background: #fff;
  outline: none;
  transition: margin 85ms ease-in,background 85ms ease-in;
`;

export const ListAddControls = styled.div`
  padding-top: 5px;
`;

export const SubmitButtonStyled = styled(SubmitButton)`
  ${AddForm} & {
    padding: 6px 12px;
    line-height: 20px;
  }
`;

export const CloseForm = styled(CloseIcon)`
  ${AddForm} & {
    margin: 0 5px;
    cursor: pointer;
    line-height: 32px;
    vertical-align: middle;
    fill: #6b778c;
    
    &:hover {
      fill: #172b4d;
    }
  }
`;
