import React from 'react';
import * as Styled from './styled';
import * as PropTypes from 'prop-types';
import AttachmentViewer from '../../AttachmentViewer';

export const Cover = (props) => {
  const [isOpenAttachment, setOpenAttachment] = React.useState(false);

  const style = {
    backgroundImage: "url(" + props.image + ")",
  };

  const openAttachmentViewer = () => {
    setOpenAttachment(true);
  };

  const hideAttachmentViewer = () => {
    setOpenAttachment(false);
  };

  return (
    <>
      <Styled.Wrapper style={style} onClick={openAttachmentViewer}>
      </Styled.Wrapper>
      {isOpenAttachment && <AttachmentViewer hideAttachmentViewer={hideAttachmentViewer} />}
    </>
  );
};

Cover.propTypes = {
  image: PropTypes.string,
};

Cover.defaultProps = {
  image: 'https://trello-attachments.s3.amazonaws.com/58df77ef2635206967cd0754/58df78607e06fb321cee6064/d95f01e33ea0fcc561b9f6f1adcf70b3/1IMG5774.jpg',
};

export default Cover;
