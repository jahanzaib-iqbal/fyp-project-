import React from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";

import MainCard from "./MainCard";
import useCardFetch from "../../hook/useCardFetch";

const Card = () => {
  const { cardData, isLoading, error } = useCardFetch();

 

  return (
    <FlatList
      data={cardData}
      horizontal={true}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <MainCard  />}
      showsHorizontalScrollIndicator={false}
      style={{ flexGrow: 0 }}
    />
  );
};

export default Card;
