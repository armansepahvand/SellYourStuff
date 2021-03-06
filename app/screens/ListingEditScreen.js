import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/forms';
import FormImagePicker from '../components/forms/FormImagePicker';
import Screen from '../components/Screen';
import useLocation from '../hooks/useLocation';
import listingsApi from '../api/listings';
import UploadScreen from './UploadScreen';

//Yup validation schema
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image'),
});

//temporary categories array to be used as data source
const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Bicycle', value: 3 },
];

//Listing screen containing a Form to add new listings or update or delete existing listings
function ListingEditScreen(props) {
  const location = useLocation();

  //state to change visibility of progress modal
  const [uploadVisible, setUploadVisible] = useState(false);
  //state to monitor progress statusse of form upload
  const [progress, setProgress] = useState(0);

  //Method to handle submitting new listings to the server side
  const handleSubmit = async (listing, { resetForm }) => {
    //reset progress value to zero
    setProgress(0);
    //show uploadScreen modal
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );
    //hide upload screen modal
    setUploadVisible(false);

    if (!result.ok) return alert('Could not save the listing.');
    alert('Success');

    //reset form fields after submiting the form
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen progress={progress} visible={uploadVisible} />
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
