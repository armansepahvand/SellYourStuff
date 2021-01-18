import React from 'react';

import ImageInputList from '../ImageInputList';
import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';

//Reusable image picker to be used in formik form
export default function FormImagePicker({ name }) {
  //using useFormikContext function to have access to forik form values and methods
  const { setFieldValue, errors, touched, values } = useFormikContext();

  //get the image uri's from formik values for the prop name into the imageUris constant
  const imageUris = values[name];

  //add the new image uri to the existing array of image uri's
  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  //remove uri given by selected image from the arry of uri's
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
