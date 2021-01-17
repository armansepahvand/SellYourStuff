import { ErrorMessage } from 'formik';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageInputList from '../ImageInputList';

export default function FormImagePicker() {
  return (
    <>
      <ImageInputList  />
      <ErrorMessage />
    </>
  );
}

const styles = StyleSheet.create({});
