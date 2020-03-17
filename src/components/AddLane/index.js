import React from 'react';
import {
  AddLabel,
  AddIcon,
  AddForm,
  Input,
  ListAddControls,
  SubmitButtonStyled,
  CloseForm,
  Wrapper
} from './styled.js';

export const AddLane = () => {
  const [isOpenForm, setIsOpenForm] = React.useState(false);

  return (
    <Wrapper className={isOpenForm ? 'form-opened' : ''}>
      {!isOpenForm && <AddLabel className={isOpenForm ? 'hide' : ''} onClick={() => setIsOpenForm(true)}>
        <AddIcon />
        Add another list
      </AddLabel>}

      {isOpenForm && <AddForm className={isOpenForm ? 'show' : ''}>
        <Input placeholder="Enter list title..." />
        <ListAddControls>
          <SubmitButtonStyled>Add List</SubmitButtonStyled>
          <span onClick={() => setIsOpenForm(false)}>
            <CloseForm />
          </span>
        </ListAddControls>
      </AddForm>}
    </Wrapper>
  );
};

export default AddLane;
