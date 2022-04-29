import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
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
  FavoriteButton,
  FavoriteText,
  NullItemDesc,
  NullItemText,
  RemoveItemButton,
  WeatherTemp,
  WeatherType,
} from "./styles";
import { globalTheme } from "../../global/themes/globalTheme";

export function CitiesList({ data, changeMetric, filter }) {
  const [cityList, setCityList] = useState(data);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const favoriteCity = (item, id) => {
    dispatch(addToFavorites(item));
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
                <FontAwesome5 name="trash" size={26} color={globalTheme.blue} />
              </RemoveItemButton>

              <FavoriteButton onPress={() => favoriteCity(item, item.id)}>
                <MaterialIcons
                  name="favorite-outline"
                  color={globalTheme.mediumGrey}
                  size={30}
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
      ListHeaderComponent={
        <View>
          <FavoriteText>Suas Cidades</FavoriteText>

          {cityList.length === 0 ? (
            <>
              <AntDesign
                name="questioncircleo"
                size={40}
                color={globalTheme.grey}
                style={{ textAlign: "center", marginTop: 40, marginBottom: 10 }}
              />
              <NullItemText>
                Sua lista de cidade está vazia, comece adicionando novas
                cidades!
              </NullItemText>
              <NullItemDesc>
                Use o botão "Adicionar Cidade" para adicionar uma cidade de sua
                preferência
              </NullItemDesc>
            </>
          ) : null}
        </View>
      }
    />
  );
}
