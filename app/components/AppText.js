import React, { Children } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function AppText({Children}) {
    return (
       <Text>{Children}</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 18,
        fontFamily: Platform.OS === "android"? "Roboto" : "Avenir" ,
        

    }
})

export default AppText;