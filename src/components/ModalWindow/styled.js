import React from 'react';
import styled from 'styled-components';
import CreditCard from '@material-ui/icons/CreditCard';
import Visibility from '@material-ui/icons/Visibility';
import SubjectIcon from '@material-ui/icons/Subject';
import CloseIcon from '@material-ui/icons/Close';
import TextareaAutosize from 'react-textarea-autosize';
import Button from '@material-ui/core/Button';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: fixed;
  position: fixed;
  left: 0;
  top: 0;
  overflow-x: hidden;
  overflow-y: auto;
  align-items: flex-start;
  justify-content: center;
  background-color: rgba(0,0,0,.64);
  z-index: 20;
`;

export const Window = styled.div`
  width: 768px;
  max-width: calc(100% - 20px);
  height: 500px;
  margin: 48px 0 80px;
  padding: 16px;
  position: relative;
  border-radius: 2px;
  overflow: hidden;
  background-color: #f4f5f7;
  z-index: 25;
`;

export const WindowHeader = styled.div`
  margin: 1px 32px;
  padding-right: 15px;
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
  color: #172b4d;
  resize: none;
  outline: none;
  
  &:focus {
    border: none;
    background: #fff;
    box-shadow: inset 0 0 0 2px #0079bf
  }
`;

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
  
  svg {
    width: 16px;
    height: 16px;
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
`;

export const WindowMainColumn = styled.div`
  width: 512px;
  min-height: 24px;
  margin: 22px 0;
  padding: 8px;
  position: relative;
  float: left;
  z-index: 0;
  
  svg {
    width: 25px;
    height: 25px;
    fill: #42526e;
  }
`;

export const Description = styled.div`
  position: relative;
`;

export const DescriptionIcon = styled(SubjectIcon)`
  width: 25px;;
  height: 25px;
  position: absolute;
  top: -2px;
  left: -37px;
`;

export const DescriptionTitle = styled.h3`
  width: 100%;
  margin: 0 0 18px 0;
  display: inline-block;
  font-size: 16px;
  line-height: 20px;
  color: #172b4d;
 
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
  color: #172b4d;
  box-shadow: none;
  cursor: pointer;
  
  &.hide {
    display: none;
  }
`;

export const DescriptionText = styled.div`
  font-size: 16px;
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
  color: #172b4d;
  
  &.hide {
    display: none;
  }
  &:focus {
    box-shadow: inset 0 0 0 2px #0079bf;
    outline: none;
  }
`;

export const EditControl = styled.div`
  margin-top: 8px;
  
  &.hide {
    display: none;
  }
`;

export const SaveDescriptionButton = styled(({ ...options }) => {
  const style = {
    backgroundColor: '#5aac44',
    minWidth: '54px',
    color: '#fff',
    textTransform: 'none',
    fontWeight: '400'
  };
  options = {style, ...options};
  return <Button {...options} />;
})``;

export const CloseDescription = styled((...options) => {
  const style = {
    width: '26px',
    height: '26px',
    margin: '0 8px',
    cursor: 'pointer',
    lineHeight: '32px',
    verticalAlign: 'middle'
  };
  options = {style, ...options};

  return <CloseIcon {...options} />
})`
  cursor: pointer;
  
  &:hover {
    color: #fff;
  }
`;
