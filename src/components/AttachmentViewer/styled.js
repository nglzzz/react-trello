import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import CallMadeIcon from '@material-ui/icons/CallMade';
import WebAssetIcon from '@material-ui/icons/WebAsset';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, .64);
  z-index: 1000;
`;

export const CloseWrapper = styled.div`
    margin: 0 auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 20;
`;

export const CloseButton = styled(CloseIcon)`
  ${Wrapper} & {
    width: 25px;
    height: 25px;
    margin: 12px;
    position: absolute;
    right: 0;
    top: 0;
    vertical-align: middle;
    line-height: 32px;
    transition-property: transform, color;
    transition-duration: .15s;
    fill: hsla(0, 0%, 100%, .6);
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      fill: #fff;
    }
  }
`;

export const PreviewWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 24px;
  bottom: 0;
  left: 24px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Preview = styled.div`
  padding: 48px 24px 112px;
  
  img {
    max-width: 100%;
    position: relative;
    border-radius: 3px;
    opacity: 1;
    z-index: 25;
    transition: transform .15s,opacity .4s;
  }
`;

export const Overlay = styled.div`
  height: 100px;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 30;
  
  p {
    margin: 0 0 8px;
  }
`;

export const OverlayDetails = styled.div`
  height: 100px;
  padding: 12px 10%;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  color: #fff;
  z-index: 30;
`;

export const OverlayDetailsTitle = styled.h2`
  margin: 0 0 8px;
  font-weight: 600;
`;

export const OverlayMeta = styled.div`
  margin: 14px 0 8px 38px;
`;

export const OverlayMetaItem = styled.span`
  padding: 0 18px;
  position: relative;

  a {
    text-decoration: underline;
    color: #fff;
    
    &:hover {
    text-decoration: none;
    }
  }
  
  .delete-link {
    margin: 0 0 0 6px;
  }
`;

export const OpenLinkIcon = styled(CallMadeIcon)`
  ${OverlayMetaItem} & {
    width: 12px;
    height: 12px;
    fill: #fff;
    position: absolute;
    left: -2px;
    top: 2px;
  }
`;

export const ChangeCoverIcon = styled(WebAssetIcon)`
  ${OverlayMetaItem} & {
    width: 16px;
    height: 16px;
    fill: #fff;
    position: absolute;
    left: -3px;
  }
`;

export const DeleteIcon = styled(CloseIcon)`
    ${OverlayMetaItem} & {
    width: 16px;
    height: 16px;
    fill: #fff;
    position: absolute;
    left: -3px;
  }
`;
