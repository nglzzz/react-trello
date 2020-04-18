import React from 'react';
import * as PropTypes from 'prop-types';
import SubmitButton from '../../SubmitButton';
import {
  Button,
  WindowSidebar,
  WindowSidebarButtonSection,
  WindowSidebarTitle
} from './styled';
import {Hr} from '../../../containers/App/styled';

export const Sidebar = (props) => {
  const showPopOverUnderButton = (button) => {
    const targetPosition = button.getBoundingClientRect();

    props.changePopOverPosition({
      left: targetPosition.x,
      top: targetPosition.top + targetPosition.height + 5
    });
    props.showPopOver();
  };

  const showLabelsPopover = (event) => {
    showPopOverUnderButton(event.target);
    props.setPopOverTitle('Labels');
    props.setPopOverContent('Labels');

  };

  const showCoverPopOver = (event) => {
    showPopOverUnderButton(event.target);
    props.setPopOverTitle('Cover');
    props.setPopOverContent(<>
      You don't have any covers. Covers make your cards more visual, memorable, and fun. Want to add one?
      <SubmitButton>Archive</SubmitButton>
    </>);
  };


  return (
    <WindowSidebar>
      <WindowSidebarButtonSection>
        <WindowSidebarTitle>Add to card</WindowSidebarTitle>
        <Button>Members</Button>
        <Button onClick={showLabelsPopover}>Labels</Button>
        <Button>Checklist</Button>
        <Button>Due Date</Button>
        <Button>Attachment</Button>
        <Button onClick={showCoverPopOver}>Cover</Button>
      </WindowSidebarButtonSection>

      <WindowSidebarButtonSection>
        <WindowSidebarTitle>Actions</WindowSidebarTitle>
        <Button>Move</Button>
        <Button>Copy</Button>
        <Button>Make Template</Button>
        <Button className="last-item-margin" onClick={() => props.setSubscription(!props.isSubscribed)}>Watch</Button>
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
  showPopOver: PropTypes.func.isRequired,
  changePopOverPosition: PropTypes.func.isRequired,
  setPopOverTitle: PropTypes.func.isRequired,
  setPopOverContent: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  isSubscribed: false
};

export default Sidebar;
