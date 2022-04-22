import { View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFavorites,
  removeFromFavorites,
} from "../../features/cities/citiesSlice";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Card,
  CardContent,
  CardFooter,
  CardSubtitle,
  CardTitle,
  FavoriteText,
  MinMax,
  RemoveFavorite,
  TempValue,
} from "./styles";

export default function Favorites({ changeMetric }) {
  const dispatch = useDispatch();
  const getFavoritesList = useSelector(getFavorites);
  const navigation = useNavigation();

  const convertToF = (celsius) => {
    return Math.round((celsius * 9) / 5 + 32);
  };

  useEffect(() => {
    console.log("lista", getFavoritesList);
  }, [getFavoritesList]);

  const renderItem = (item) => (
    <Card onPress={() => navigation.navigate("WeatherDetails", item)}>
      <CardContent>
        <View>
          <CardTitle> {item.name} </CardTitle>
          <CardSubtitle>{item.uf}</CardSubtitle>
        </View>

        <View style={{ marginLeft: 30 }}>
          <TempValue>
            {changeMetric
              ? convertToF(item.temp) + "ºF"
              : Math.round(item.temp) + "ºC"}
          </TempValue>
        </View>
      </CardContent>

      <CardFooter>
        <MinMax>
          {changeMetric
            ? convertToF(item.temp_min) + "ºF"
            : Math.round(item.temp_min) + "ºC"}{" "}
          -{" "}
          {changeMetric
            ? convertToF(item.temp_max) + "ºF"
            : Math.round(item.temp_max) + "ºC"}
        </MinMax>

        <RemoveFavorite
          onPress={() => dispatch(removeFromFavorites({ id: item.id }))}
        >
          <FontAwesome5 name="trash" size={26} color="#008df3" />
        </RemoveFavorite>
      </CardFooter>
    </Card>
  );

  return (
    <View style={{ marginBottom: 20 }}>
      {getFavoritesList.length !== 0 ? (
        <>
          <FavoriteText> Favoritos </FavoriteText>
          <FlatList
            data={getFavoritesList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => renderItem(item)}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </>
      ) : null}
    </View>
  );
}
