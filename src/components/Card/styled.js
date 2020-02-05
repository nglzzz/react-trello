import styled from 'styled-components';
import * as Colors from '../../constants/colors';

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
