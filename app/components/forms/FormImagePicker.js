import { ErrorMessage } from 'formik';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageInputList from '../ImageInputList';
import useFormikContext from 'formik';

export default function FormImagePicker({ name }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  const imageUris = values[name];

export default function FormImagePicker() {
  return (
    <>
      <ImageInputList  />
      <ErrorMessage />
    </>
  );
}

const styles = StyleSheet.create({});
