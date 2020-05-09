import styled from 'styled-components';
import SubmitButton from '../SubmitButton';
import StartIconMaterial from '@material-ui/icons/StarBorder';
import InputAutosize from '../InputAutosize';

export const Header = styled.div`
  height: 48px;
  padding: 4px 20px 5px 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 37px;
  color: #fff;
`;

export const EditableName = styled(InputAutosize)`
  height: 32px;
  margin-right: 4px;
  padding: 0 12px;
  vertical-align: middle;
  font-weight: bold;
  line-height: 32px;
  border: none;
  border-radius: 3px;
  background: transparent;
  color: #fff;
  cursor: pointer;
  outline: none;
  
  &:hover {
    background-color: hsla(0, 0%, 100%, .32);
  }
  &:focus {
    background-color: #fff;
    color: #000;
  }
`;

export const Name = styled.div`
  height: 32px;
  margin-right: 4px;
  padding: 0 12px;
  display: inline-block;
  vertical-align: middle;
  font-weight: bold;
  line-height: 32px;
  color: #fff;
`;

export const Divider = styled.span`
  height: 16px;
  margin: 8px;
  border-left: 1px solid hsla(0,0%,100%,.24);
`;

export const Button = styled(SubmitButton)`
  ${Header} & {
    padding: 4px 10px;
    background-color: hsla(0, 0%, 100%, .24);
    
    &:hover {
      background-color: hsla(0, 0%, 100%, .32);
    }
  }
`;

export const FavoriteButton = styled(Button)`
  ${Header} & {
    width: 32px;
    min-width: 32px;
    height: 32px;
  }
  
  ${props => props.subscribed && (`
    ${Header} & {
      svg {
        fill: #f2d600;
      }
    }
  `)}
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

export const StarIcon = styled(StartIconMaterial)`
  ${Header} & {
    fill: #fff;
  }
`;

export const InviteButton = styled(Button)`
  ${Header} & {
    margin-left: 8px;
  }
`;
