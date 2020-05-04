import styled from 'styled-components';
import SubmitButton from '../SubmitButton';
import StartIconMaterial from '@material-ui/icons/StarBorder';
import InputAutosize from '../InputAutosize';

export const Header = styled.div`
  height: 48px;
  padding: 5px 20px;
  font-size: 18px;
  font-weight: 700;
  line-height: 37px;
  color: #fff;
`;

export const Name = styled(InputAutosize)`
  margin-right: 4px;
  font-weight: bold;
`;

export const Divider = styled.span`
  height: 16px;
  margin: 8px 8px 12px 10px;
  border-left: 1px solid hsla(0,0%,100%,.24);
`;

export const Team = styled.span`
  padding-left: 12px;
  font-size: 14px;
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
  
`;

export const StarIcon = styled(StartIconMaterial)`
  ${Header} & {
    fill: #fff;
  }
`;
