import React from "react";
import { FlatList } from "react-native";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Green jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Bicycle for sale",
    price: 200,
    image: require("../assets/jacket.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen>
      <FlatList />
    </Screen>
  );
}

export default ListingsScreen;
