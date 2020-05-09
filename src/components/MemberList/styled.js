import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 -2px 0 0;
  display: inline-block;
  vertical-align: middle;
  
  &:after {
    content: '';
    clear: both;
  }
`;

export const Member = styled.div`
  width: 28px;
  height: 28px;
  margin: 0 0 4px 0;
  position: relative;
  float: right;
  border-radius: 25em;
  cursor: pointer;
  color: #172b4d;
  user-select: none;
  background-color: #dfe1e6;
  
  &:hover {
    background-color: #c1c7d0;
    
    > img {
      opacity: .8;
    }
  }
`;

export const Avatar = styled.img`
  width: 28px;
  height: 28px;
  object-fit: cover;
  border-radius: 25em;
`;

export const Initial = styled.span`
  width: 28px;
  height: 28px;
  line-height: 28px;
  display: block;
  position: absolute;
  top: 0;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  overflow: hidden;
`;
