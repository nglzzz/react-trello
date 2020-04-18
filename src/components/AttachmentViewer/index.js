import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';

export const AttachmentViewer = ({hideAttachmentViewer, image}) => {
  const [isCover, setCover] = React.useState(true);
  const [showDeleteConfirmation, setDeleteConfirmation] = React.useState(false);

  const toggleCover = () => {
    setCover(!isCover);
  }

  const confirmDelete = () => {
    setDeleteConfirmation(true);
  }

  const deleteCover = () => {
    hideAttachmentViewer();
  }

  const cancelDelete = () => {
    setDeleteConfirmation(false);
  }

  return (
    <Styled.Wrapper>
      <Styled.CloseWrapper onClick={hideAttachmentViewer}>
        <span>
          <Styled.CloseButton onClick={hideAttachmentViewer} />
        </span>
      </Styled.CloseWrapper>
      <Styled.PreviewWrapper>
        <Styled.Preview>
          <img src={image} alt="" />
        </Styled.Preview>
      </Styled.PreviewWrapper>
      <Styled.Overlay>
        <Styled.OverlayDetails>
          <Styled.OverlayDetailsTitle>Image-file-name.jpg</Styled.OverlayDetailsTitle>
          <p>Added <span>Mar 30 at 1:30 AM</span> - 46.81 KB</p>
          <Styled.OverlayMeta>
            {!showDeleteConfirmation &&
            <>
              <Styled.OverlayMetaItem>
                <a href={image} target="_blank" rel="noopener noreferrer">
                  <Styled.OpenLinkIcon />
                  Open in New Tab
                </a>
              </Styled.OverlayMetaItem>
              <Styled.OverlayMetaItem>
                <a href="#" onClick={toggleCover}>
                  <Styled.ChangeCoverIcon />
                  {isCover ? 'Remove Cover' : 'Make Cover'}
                </a>
              </Styled.OverlayMetaItem>
              <Styled.OverlayMetaItem>
                <a href="#" onClick={confirmDelete}>
                  <Styled.DeleteIcon />
                  Delete
                </a>
              </Styled.OverlayMetaItem>
            </>}
            {showDeleteConfirmation &&
              <Styled.OverlayMetaItem>
                Are you sure you want to delete? There is no undo.
                <a href="#" className="delete-link" onClick={deleteCover}>Delete forever.</a>
                <a href="#" className="delete-link" onClick={cancelDelete}>Never mind.</a>
              </Styled.OverlayMetaItem>
            }
          </Styled.OverlayMeta>
        </Styled.OverlayDetails>
      </Styled.Overlay>
    </Styled.Wrapper>
  );
};

AttachmentViewer.propTypes = {
  hideAttachmentViewer: PropTypes.func.isRequired,
  image: PropTypes.string,
};

AttachmentViewer.defaultProps = {
  image: 'https://trello-attachments.s3.amazonaws.com/58df77ef2635206967cd0754/58df78607e06fb321cee6064/d95f01e33ea0fcc561b9f6f1adcf70b3/1IMG5774.jpg',
}

export default AttachmentViewer;
