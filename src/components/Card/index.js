import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderSub,
  CardHeaderTemp,
  CardHeaderText,
  CardWithoutTouchable,
  FavoriteButton,
  WeatherTemp,
  WeatherType,
} from "./styles";

export function CardComponent({ data, changeMetric }) {
  const [selected, setSelected] = useState(false);
  const [favorite, setFavorite] = useState();

  const favoriteCity = (item, id) => {
    setFavorite(item);
    setSelected(id);

    console.log(favorite);
  };

  function convertToF(celsius) {
    return Math.round((celsius * 9) / 5 + 32);
  }

  const cardRender = (item) => {
    return (
      <Card>
        <CardHeader>
          <View>
            <CardHeaderText>{item.name}</CardHeaderText>
            <CardHeaderSub>{item.uf}</CardHeaderSub>
          </View>

          <View>
            <CardHeaderTemp>
              {changeMetric
                ? convertToF(item.temp) + "ºF"
                : Math.round(item.temp) + "ºC"}
            </CardHeaderTemp>
          </View>
        </CardHeader>

        <CardBody>
          <View>
            <WeatherType>
              {item.weather.map((weather) => weather.description)}
            </WeatherType>
            <WeatherTemp>
              {changeMetric
                ? convertToF(item.temp_min) + "ºF"
                : Math.round(item.temp_min) + "ºC"}{" "}
              -
              {changeMetric
                ? convertToF(item.temp_max) + "ºF"
                : Math.round(item.temp_max) + "ºC"}
            </WeatherTemp>
          </View>

          <FavoriteButton onPress={() => favoriteCity(item, item.id)}>
            <MaterialIcons
              name={selected === item.id ? "favorite" : "favorite-outline"}
              size={30}
              color={selected === item.id ? "red" : "#b1b1b1"}
            />
          </FavoriteButton>
        </CardBody>
      </Card>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => cardRender(item)}
    />
  );
}

export function AsyncCard({ children }) {
  return <CardWithoutTouchable>{children}</CardWithoutTouchable>;
}
