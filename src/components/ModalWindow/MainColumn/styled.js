import styled from 'styled-components';
import Button from '../../ModalButton';
import SubjectIcon from '@material-ui/icons/Subject';
import CloseIcon from '@material-ui/icons/Close';
import TextareaAutosize from 'react-textarea-autosize';
import {COMMON} from '../../../constants/colors';

export const WindowMainColumn = styled.div`
  width: 528px;
  min-height: 24px;
  margin: 22px 0;
  padding: 0 8px 8px 8px;
  position: relative;
  float: left;
  z-index: 0;
`;

export const DescriptionTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 32px;
  
  ${Button} {
    margin: -20px 0 0 8px;
  }
`;

export const Description = styled.div`
  padding-top: 8px;
  position: relative;
`;

export const DescriptionIcon = styled(SubjectIcon)`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 5px;
  left: -37px;
  
  ${WindowMainColumn} & {
    width: 25px;
    height: 25px;
    fill: #42526e;
  }
`;

export const DescriptionTitle = styled.h3`
  margin: 0 0 18px 0;
  display: inline-block;
  font-size: 16px;
  line-height: 20px;
 
`;

export const DescriptionButton = styled.div`
  min-height: 55px;
  padding: 8px 12px;
  display: block;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  border-radius: 3px;
  border: none;
  text-decoration: none;
  background-color: rgba(9,30,66,.04);
  box-shadow: none;
  cursor: pointer;
  
  &.hide {
    display: none;
  }
`;

export const DescriptionText = styled.div`
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
`;

export const DescriptionEditor = styled(TextareaAutosize)`
  width: 100%;
  max-width: 100%;
  min-height: 108px;
  margin-bottom: 8px;
  padding: 8px 12px;
  display: block;
  resize: none;
  font-size: 14px;
  line-height: 20px;
  border: none;
  border-radius: 3px;
  box-shadow: none;
  background: #fff;
  color: ${COMMON};
  
  &.hide {
    display: none;
  }
  &:focus {
    box-shadow: inset 0 0 0 2px #0079bf;
    outline: none;
  }
`;

export const EditControl = styled.div`
  &.hide {
    display: none;
  }
`;

export const EditButton = styled(Button)`
  margin: -18px 0 0 8px;
`;

export const CloseDescription = styled(CloseIcon)`
  width: 26px;
  height: 26px;
  margin: 0 8px;
  cursor: pointer;
  line-height: 32px;
  vertical-align: middle;
`;
