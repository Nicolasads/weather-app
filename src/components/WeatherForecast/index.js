import { View, Text, FlatList } from "react-native";
import React from "react";

export default function WeatherForecast({ data }) {
  const renderItem = () => {};

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<Text>Próximos dias</Text>}
    />
  );
}
