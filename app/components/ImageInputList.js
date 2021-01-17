import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageInput from './ImageInput';

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <ImageInput
          imageUri={uri}
          key={uri}
          onChangeImage={() => onRemoveImage(uri)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
