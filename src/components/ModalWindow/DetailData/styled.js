import styled from 'styled-components';
import IconAdd from '@material-ui/icons/Add';
import * as Colors from '../../../constants/colors';

export const StyledDetailsData = styled.div`
  margin-top: 0;
  
  &:after {
    display: table;
    clear: both;
    content: '';
  }
`;

export const Title = styled.h3`
    margin: 0 8px 4px 0;
    display: block;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: .04em;
    text-transform: uppercase;
    line-height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #5e6c84;
`;

export const Item = styled.div`
    margin: 0 8px 8px 0;
    display: block;
    float: left;
    
    &:after {
      display: table;
      clear: both;
      content: '';
    }
`;

export const Member = styled.div`
  width: 32px;
  height: 32px;
  margin: 0 4px 4px 0;
  display: block;
  float: left;
  position: relative;
  border-radius: 25em;
  text-decoration: none;
  overflow: hidden;
  user-select: none;
  background-color: #dfe1e6;
  color: #172b4d;
  cursor: pointer;
  
  &:hover {
    background-color: #c1c7d0;
    
    img {
      opacity: .8;
    }
  }
  
  img {
    width: 100%;
    height: 100%;
  }
`;

export const AddButton = styled(IconAdd)`
  margin: 0 8px 8px 0;
  padding: 8px;
  border-radius: 3px;
  background-color: rgba(9,30,66,.04);
  cursor: pointer;
  
  ${Item} & {
    width: 32px;
    height: 32px;
    font-size: 16px;
    line-height: 16px;
    
    &:hover {
      background-color: rgba(9,30,66,.08);
    }
    
    &.circle {
      border-radius: 25em;
    }
  }
`;

export const Label = styled.span`
  min-width: 40px;
  margin: 0 4px 4px 0;
  padding: 0 12px;
  display: block;
  float: left;
  border-radius: 3px;
  font-weight: 600;
  height: 32px;
  line-height: 32px;
  box-sizing: border-box;

  cursor: pointer;
  
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
  
  &:hover {
    opacity: .8;
  }
`;
