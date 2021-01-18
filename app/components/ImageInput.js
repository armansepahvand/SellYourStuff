import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import colors from '../config/colors';

//reusable image input component which recieve the image uri and image change function as props
export default function ImageInput({ imageUri, onChangeImage }) {
  //check for permission to access media library or camera once for each render
  useEffect(() => {
    requestPermission();
  }, []);

  //function to ask for permission to access media library
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert('You need to enable permission to access the library');
    }
  };

  //function to get an image from media library
  const selectImage = async () => {
    try {
      //get the selected image and pass it to the result constant
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      //If selection is not cancelled pass the uri of the selected image to the
      //onChangeImage prop function which will add the uri to the list of images in the parent component
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('Delete', 'Are you sure you wnat to delete this image', [
        {
          text: 'yes',
          onPress: () => onChangeImage(null),
        },
        { text: 'No' },
      ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {/* If there is no image uri show the camera icon */}
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        )}
        {/* If there is an image uri show the image */}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 100,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
