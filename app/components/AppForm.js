import React from 'react';

function AppForm(props) {
    return (
        <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
          </Formik>
    );
}

export default AppForm;