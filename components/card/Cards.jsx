import React, { useState } from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";

import MainCard from "./MainCard";


const Card = ({cardData}) => {
  

  return (
    <FlatList
      data={cardData}
      horizontal={true}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <MainCard cardData={item} />}
      showsHorizontalScrollIndicator={false}
      style={{ flexGrow: 0 }}
    />
  );
};

export default Card;
