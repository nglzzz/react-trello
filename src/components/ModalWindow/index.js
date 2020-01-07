import React from 'react';
import {
  Overlay,
  Window,
  WindowHeader,
  WindowTitle,
  CardIcon,
  HeaderInline,
  HeaderInlineText,
  SubscriptionIcon,
  DescriptionIcon,
  WindowMainColumn,
  Description,
  DescriptionTitle,
  DescriptionButton,
  DescriptionText,
  DescriptionEditor,
  EditControl,
  SaveDescriptionButton,
  CloseDescription
} from './styled.js';


export const ModalWindow = () => {
  const [isShowDescription, toggleDescriptionEditor] = React.useState(false);
  const [descriptionText, changeDescription] = React.useState('');

  const closeEditor = () => {
    toggleDescriptionEditor(false);
    changeDescription('');
  };

  const saveDescription = () => {
    toggleDescriptionEditor(false);
  };

  const handleChangeDescription = (event) => {
    changeDescription(event.target.descriptionText);
  };

  return (
    <Overlay>
      <Window>
        <WindowHeader>
          <CardIcon />
          <WindowTitle defaultValue="Test Test Test Test Test Test Test Test Test Test Test Test Test Test" />

          <HeaderInline>
            <HeaderInlineText>in list <a href="#">INFO</a></HeaderInlineText>
            <SubscriptionIcon />
          </HeaderInline>

          <WindowMainColumn>
            <Description>
              <DescriptionIcon />

              <DescriptionTitle>Description</DescriptionTitle>

              {descriptionText === '' ?
                  <DescriptionButton onClick={toggleDescriptionEditor} className={isShowDescription ? 'hide' : 'show'}>
                    Add a more detailed description...
                  </DescriptionButton>
                :
                  <DescriptionText className={isShowDescription ? 'hide' : 'show'} value={descriptionText}>
                    {descriptionText}
                  </DescriptionText>
              }

              <DescriptionText className={isShowDescription ? 'hide' : 'show'} value={descriptionText}>
                {descriptionText}
              </DescriptionText>

              <EditControl className={!isShowDescription ? 'hide' : 'show'}>
                <DescriptionEditor
                  placeholder="Add a more detailed description..."
                  value={descriptionText}
                  onChange={handleChangeDescription}
                />

                <SaveDescriptionButton onClick={saveDescription}>Save</SaveDescriptionButton>
                <span onClick={closeEditor}>
                  <CloseDescription />
                </span>
              </EditControl>
            </Description>
          </WindowMainColumn>
        </WindowHeader>
      </Window>
    </Overlay>
  );
};

export default ModalWindow;
