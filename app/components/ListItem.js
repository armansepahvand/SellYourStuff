import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

function ListItem({ image, title, subTitle }) {
    return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
})

export default ListItem;