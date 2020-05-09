import React from 'react';
import * as PropTypes from 'prop-types';
import {
  Button,
  Divider,
  EditableName,
  FavoriteButton,
  Header,
  InviteButton,
  Name,
  StarIcon
} from './styled.js';
import MemberList from '../MemberList';

const BoardHeader = ({ data }) => {
  const [subscribed, setSubscribed] = React.useState(data.subscribed);

  const toggleFavorite = () => {
    setSubscribed(!subscribed);
  }

  return (
    <Header>
      {data.editable ? <EditableName defaultValue={data.name} /> : <Name>{data.name}</Name>}
      <FavoriteButton onClick={toggleFavorite} subscribed={subscribed}><StarIcon/></FavoriteButton>
      <Divider/>
      <Button>Personal</Button>
      <Divider/>
      <Button>Private</Button>
      <Divider/>
      <MemberList list={data.members} />
      <InviteButton>Invite</InviteButton>
    </Header>
  );
};

BoardHeader.propTypes = {
  boardData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    teamName: PropTypes.string,
    closed: PropTypes.bool.isRequired,
    subscribed: PropTypes.bool.isRequired,
    editable: PropTypes.bool.isRequired,
    members: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string,
        initials: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }),
};

BoardHeader.defaultProps = {
  closed: false,
  subscribed: false,
  editable: false,
}

export default BoardHeader;
