import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { useDispatch } from "react-redux";
import {
  addToFavorites,
  removeCityItem,
} from "../../features/cities/citiesSlice";

import { FontAwesome5 } from "@expo/vector-icons";

import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderSub,
  CardHeaderTemp,
  CardHeaderText,
  CardWithoutTouchable,
  FavoriteButton,
  FavoriteText,
  RemoveItemButton,
  WeatherTemp,
  WeatherType,
} from "./styles";

export function CardComponent({ data, changeMetric, filter }) {
  const [cityList, setCityList] = useState(data);
  const [selected, setSelected] = useState(false);
  const [favorite, setFavorite] = useState();

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const favoriteCity = (item, id) => {
    setFavorite(item);
    setSelected(id);

    console.log(favorite);

    dispatch(addToFavorites(item));
    dispatch(removeCityItem({ id: item.id }));
  };

  const convertToF = (celsius) => {
    return Math.round((celsius * 9) / 5 + 32);
  };

  useEffect(() => {
    if (filter === "") {
      setCityList(data);
    } else {
      setCityList(
        data.filter((item) => {
          if (item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [filter, data]);

  const cardRender = (item) => {
    return (
      <>
        <Card
          onPress={() => navigation.navigate("WeatherDetails", { item: item })}
        >
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
                -{" "}
                {changeMetric
                  ? convertToF(item.temp_max) + "ºF"
                  : Math.round(item.temp_max) + "ºC"}
              </WeatherTemp>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RemoveItemButton
                onPress={() => dispatch(removeCityItem({ id: item.id }))}
              >
                <FontAwesome5 name="trash" size={26} color="#008df3" />
              </RemoveItemButton>

              <FavoriteButton onPress={() => favoriteCity(item, item.id)}>
                <MaterialIcons
                  name={selected === item.id ? "favorite" : "favorite-outline"}
                  size={30}
                  color={selected === item.id ? "#008df3" : "#b1b1b1"}
                />
              </FavoriteButton>
            </View>
          </CardBody>
        </Card>
      </>
    );
  };

  return (
    <FlatList
      data={cityList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => cardRender(item)}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<FavoriteText>Suas Cidades</FavoriteText>}
    />
  );
}

export function AsyncCard({ children }) {
  return <CardWithoutTouchable>{children}</CardWithoutTouchable>;
}
