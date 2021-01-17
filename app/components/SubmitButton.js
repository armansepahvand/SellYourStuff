import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from './AppButton';

//Reusable Submit Button that gets the button title from props
function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit}></AppButton>;
}

export default SubmitButton;
