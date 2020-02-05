import React from 'react';
import {
  CloseDescription,
  Description,
  DescriptionButton,
  DescriptionEditor,
  DescriptionIcon,
  DescriptionText,
  DescriptionTitle,
  DescriptionTitleWrapper,
  EditButton,
  EditControl,
  WindowMainColumn
} from './styled';
import SubmitButton from '../../SubmitButton';
import WindowDetailData from '../DetailData';


export const MainColumn = () => {
  const [isShowDescription, toggleDescriptionEditor] = React.useState(false);
  const [descriptionText, changeDescription] = React.useState('');
  const descriptionEditorRef = React.useRef();

  const closeEditor = () => {
    toggleDescriptionEditor(false);
  };

  const saveDescription = (text) => {
    changeDescription(text);
    closeEditor();
  };

  const pressDescriptionKey = (e) => {
    if ('Enter' === e.key && e.ctrlKey) {
      // TODO: fix
      setTimeout(() => saveDescription());
    }
  };

  const printDescription = () => {
    return (
      descriptionText.trim().split('\n').map((text, index) => (
        <React.Fragment key={`${text}-${index}`}>
          {text}
          <br />
        </React.Fragment>
      ))
    );
  };

  const showDescriptionEditor = () => {
    toggleDescriptionEditor(true);
    setTimeout(() => {
      descriptionEditorRef.current.focus();
      descriptionEditorRef.current.select();
    });
  };


  const renderDescription = () => {
    if (isShowDescription) {
      return;
    }

    return (
      descriptionText === '' ?
        <DescriptionButton onClick={showDescriptionEditor} className={isShowDescription ? 'hide' : 'show'}>
          Add a more detailed description...
        </DescriptionButton>
        :
        <DescriptionText onClick={showDescriptionEditor} className={isShowDescription ? 'hide' : 'show'} value={descriptionText}>
          {printDescription()}
        </DescriptionText>
    );
  };

  const renderDescriptionEditor = () => {
    return (
      <EditControl className={!isShowDescription ? 'hide' : 'show'}>
        <DescriptionEditor
          inputRef={descriptionEditorRef}
          placeholder="Add a more detailed description..."
          value={descriptionText}
          onChange={event => changeDescription(event.target.value)}
          onKeyPress={pressDescriptionKey}
        />

        <SubmitButton onClick={() => saveDescription(descriptionText)}>Save</SubmitButton>
        <span onClick={closeEditor}>
          <CloseDescription />
        </span>
      </EditControl>
    );
  };

  return (
    <WindowMainColumn>
      <WindowDetailData />
      <Description>
        <DescriptionTitleWrapper>
          <DescriptionIcon />

          <DescriptionTitle>Description</DescriptionTitle>
          {!isShowDescription && descriptionText && <EditButton onClick={showDescriptionEditor}>Edit</EditButton>}
        </DescriptionTitleWrapper>

        {renderDescription()}
        {renderDescriptionEditor()}

      </Description>
    </WindowMainColumn>
  );
};

export default MainColumn;
