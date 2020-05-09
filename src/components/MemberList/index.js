import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Member,
  Initial,
  Wrapper,
} from './styled';

export const MemberList = ({ className, list }) => {
  return (
    <Wrapper className={className}>
      {list.map((member, index) => (
        <Member key={index} title={member.fullName}>
          {member.avatarUrl ? <Avatar src={member.avatarUrl} /> : <Initial>{member.initials}</Initial>}
        </Member>
      ))}
    </Wrapper>
  );
};

MemberList.propTypes = {
  className: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      fullName: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      initials: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

MemberList.defaultProps = {
  className: '',
}

export default MemberList;
