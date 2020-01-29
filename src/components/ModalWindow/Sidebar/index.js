import React from 'react';
import * as PropTypes from 'prop-types';
import {
  Button,
  WindowSidebar,
  WindowSidebarButtonSection,
  WindowSidebarTitle
} from './styled';
import {Hr} from '../../../containers/App/styled';

export const Sidebar = ({isSubscribed, setSubscription}) => {
  return (
    <WindowSidebar>
      <WindowSidebarButtonSection>
        <WindowSidebarTitle>Add to card</WindowSidebarTitle>
        <Button>Members</Button>
        <Button>Labels</Button>
        <Button>Checklist</Button>
        <Button>Due Date</Button>
        <Button>Attachment</Button>
        <Button>Cover</Button>
      </WindowSidebarButtonSection>

      <WindowSidebarButtonSection>
        <WindowSidebarTitle>Actions</WindowSidebarTitle>
        <Button>Move</Button>
        <Button>Copy</Button>
        <Button>Make Template</Button>
        <Button className="last-item-margin" onClick={() => setSubscription(!isSubscribed)}>Watch</Button>
        <Hr/>
        <Button>Archive</Button>
        <Button>Share</Button>
      </WindowSidebarButtonSection>
    </WindowSidebar>
  );
};

Sidebar.propTypes = {
  isSubscribed: PropTypes.bool,
  setSubscription: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  isSubscribed: false
};

export default Sidebar;
