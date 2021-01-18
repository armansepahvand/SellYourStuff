import React, { useRef } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import ImageInput from './ImageInput';

//Reusable image list for inputing multiple images
export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  //adding a reference for the scrollView tag
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        // move to the end of the row by adding each image
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {/* map over image uri's and render ImageInput component for each of them */}
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          {/* render an image input component without uri to be the 
          last item on the list as a camera icon to pick new images */}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
  },
});
