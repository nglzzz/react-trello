import styled from 'styled-components';
import * as Colors from '../../constants/colors';
import Visibility from '@material-ui/icons/Visibility';
import SubjectIcon from '@material-ui/icons/Subject';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MemberList from '../MemberList';

export const Item = styled.div`
  width: 100%;
  padding: 6px 8px;
  border-radius: 3px;
  min-height: 20px;
  margin-bottom: 8px;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  white-space: normal;
  background-color: #fff;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);
  color: ${Colors.COMMON};
  cursor: pointer;
  
  &:hover {
    background-color: #f7f6f6
  }
  &:after {
    content: '';
    clear: both;
    display: block;
  }
`;

export const ListLabels = styled.div`
  position: relative;
  overflow: auto;
  
  &.opened {
     span {
       max-width: 198px;
       min-width: 56px;
       height: 16px;
       padding: 0 8px;
       line-height: 16px;
     }
   }
   &.hover {
    span {
      &.green {
        background-color: ${Colors.GREEN_HOVER};
      }
      &.yellow {
        background-color: ${Colors.YELLOW_HOVER};
      }
      &.orange {
        background-color: ${Colors.ORANGE_HOVER};
      }
      &.red {
        background-color: ${Colors.RED_HOVER};
      }
      &.purple {
        background-color: ${Colors.PURPLE_HOVER};
      }
      &.blue {
        background-color: ${Colors.BLUE_HOVER};
      }
    }
   }
`;

export const Label = styled.span`
  width: auto;
  min-width:40px;
  height: 8px;
  margin: 0 4px 4px 0;
  padding: 0;
  display: block;
  float: left;
  border-radius: 4px;
  overflow: hidden;
  font-size: 12px;
  font-weight: 700;
  line-height: 100px;
  text-shadow: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all .3s ease-in-out;
  color: #fff;
  
  &.green {
    background-color: ${Colors.GREEN};
  }
  &.yellow {
    background-color: ${Colors.YELLOW};
  }
  &.orange {
    background-color: ${Colors.ORANGE};
  }
  &.red {
    background-color: ${Colors.RED};
  }
  &.purple {
    background-color: ${Colors.PURPLE};
  }
  &.blue {
    background-color: ${Colors.BLUE};
  }
`;

export const Content = styled.div`
  max-height: 180px;
  margin: 0 0 4px;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  word-wrap: break-word;
  clear: both;
  color: ${Colors.COMMON};
`;

export const Badges = styled.div`
  max-width: 100%;
  margin-left: -2px;
  display: flex;
  float: left;
`;

export const BadgeItem = styled.div`
  height: 24px;
  margin: 0 4px 4px 0;
  padding: 5px;
  display: flex;
  align-items: center;
  color: #6b778c;
  
  &.is-due-past {
    border-radius: 3px;
    background-color: #ec9488;
    color: #fff;
    
    svg {
      fill: #fff;
    }
  }
`;

export const BadgeText = styled.span`
  padding: 0 4px;
  font-size: 12px;
  white-space: nowrap;
`;

export const SubscriptionIcon = styled(Visibility)`  
  ${Badges} & {
    width: 16px;
    height: 16px;
    fill: #6b778c;
  }
`;

export const DescriptionIcon = styled(SubjectIcon)`
  ${Badges} & {
    width: 16px;
    height: 16px;
    fill: #6b778c;
  }
`;

export const TimerIcon = styled(AccessTimeIcon)`
  ${Badges} & {
    width: 16px;
    height: 16px;
    fill: #6b778c;
  }
`;

export const CardMemberList = styled(MemberList)`
  > * {
    margin-left: 4px;
  }
`;
