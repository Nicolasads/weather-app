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

export function CardComponent({ data }) {
  const [favorite, setFavorite] = useState(false);
  const [favoriteIcon, setFavoriteIcon] = useState("favorite-outline");
  const [changeMetric, setChangeMetric] = useState(false);

  const favoriteCity = () => {
    favorite ? setFavorite(false) : setFavorite(true);
    favorite
      ? setFavoriteIcon("favorite")
      : setFavoriteIcon("favorite-outline");
  };

  useEffect(() => {
    console.log("data", data);
  }, []);

  const cardRender = (item) => {
    return (
      <Card>
        <CardHeader>
          <View>
            <CardHeaderText>{item.name}</CardHeaderText>
            <CardHeaderSub>{item.uf}</CardHeaderSub>
          </View>

          <View>
            <CardHeaderTemp>{Math.round(item.temp)}ºC</CardHeaderTemp>
          </View>
        </CardHeader>

        <CardBody>
          <View>
            <WeatherType>
              {item.weather.map((weather) => weather.description)}
            </WeatherType>
            <WeatherTemp>
              {Math.round(item.temp_min)}ºC - {Math.round(item.temp_max)}ºC
            </WeatherTemp>
          </View>

          <FavoriteButton onPress={() => favoriteCity()}>
            <MaterialIcons
              name={favoriteIcon}
              size={30}
              color={favorite ? "#b1b1b1" : "red"}
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
