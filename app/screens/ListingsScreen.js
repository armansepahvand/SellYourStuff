import React from "react";
import { FlatList } from "react-native";
import AppCard from "../components/AppCard";
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
    image: require("../assets/bicycle.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

export default ListingsScreen;
