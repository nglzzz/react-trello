import React from 'react';
import * as PropTypes from 'prop-types';
import {
  CloseForm,
  FormWrapper,
  TextArea,
  SubmitButtonStyled
} from './styled.js';

export const NewCardForm = ({hideForm}) => {
  return (
    <FormWrapper>
      <TextArea defaultValue='test' />
      <SubmitButtonStyled>Add Card</SubmitButtonStyled>
      <span onClick={hideForm}>
        <CloseForm />
      </span>
    </FormWrapper>
  );
};

NewCardForm.propTypes = {
  hideForm: PropTypes.func.isRequired,
};

export default NewCardForm;
