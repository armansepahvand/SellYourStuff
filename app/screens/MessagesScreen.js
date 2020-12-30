import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/arman.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/arman.png"),
  },
];

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messge) => messge.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => console.log("Tapped", item)}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={ListItemDeleteAction}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  );
}

export default MessagesScreen;
