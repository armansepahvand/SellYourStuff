import React from 'react';
import { useFormikContext } from 'formik';

import AppText from './AppText';
import ErrorMessage from './ErrorMessage';


//Reusable forrm field for Formik forms
function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[email]} visible={touched[email]} />
    </>
  );
}

export default AppFormField;
