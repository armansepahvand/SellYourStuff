import React from 'react';
import { Formik } from 'formik';

//A formik form framework to be used as the main form component in the app
function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {/* Get the form JSX from the children prop coming from the parent component */}
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
