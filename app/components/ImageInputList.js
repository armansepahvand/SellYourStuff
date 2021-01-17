import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageInput from './ImageInput'

export default function ImageInputList({imageUris=[]}) {
    return (
        <View style={styles.container}>
            {imageUris.map(uri=><ImageInput imageUri={uri} onChangeImage={}/> )}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    }
})
