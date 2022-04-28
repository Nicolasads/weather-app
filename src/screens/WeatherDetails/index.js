import React, { useState } from "react";
import { Image, View, Switch, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  BackButton,
  BackButtonText,
  Body,
  CityInfos,
  CityName,
  CityWeather,
  Header,
  MinMax,
  TempDatas,
  Temperature,
} from "./styles";
import WeatherForecast from "../../components/WeatherForecast";

export default function WeatherDetails({ route, navigation }) {
  const [temperature, setTemperature] = useState(false);
  const { item } = route.params;

  const img = {
    uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
  };

  const toggleSwitch = () => setTemperature((previousState) => !previousState);

  const convertToF = (celsius) => {
    return Math.round((celsius * 9) / 5 + 32);
  };

  return (
    <LinearGradient
      colors={["#A1CDFF", "#C2DEFF", "#FEFEFF"]}
      style={{ flex: 1, paddingHorizontal: 20 }}
    >
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackButtonText>Voltar</BackButtonText>
        </BackButton>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Switch
            trackColor={{ false: "#767577", true: "#008df3" }}
            thumbColor={"#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={temperature}
            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
          />
          <Text style={{ paddingLeft: 10 }}>
            {temperature === true ? "ºF" : "ºC"}
          </Text>
        </View>
      </Header>

      <Body>
        <TempDatas>
          <Image source={img} style={{ height: 100, width: 140 }} />

          <View>
            <Temperature>
              {" "}
              {temperature
                ? convertToF(item.temp) + "ºF"
                : Math.round(item.temp) + "ºC"}{" "}
            </Temperature>
            <MinMax>
              {temperature
                ? convertToF(item.temp_min) + "ºF"
                : Math.round(item.temp_min) + "ºC"}{" "}
              -{" "}
              {temperature
                ? convertToF(item.temp_max) + "ºF"
                : Math.round(item.temp_max) + "ºC"}
            </MinMax>
          </View>
        </TempDatas>
        <CityInfos>
          <CityWeather color={item.weather[0].description}>
            {item.weather[0].description}
          </CityWeather>
          <CityName>{item.name}</CityName>
        </CityInfos>

        <WeatherForecast data={item} changeMetric={temperature} />
      </Body>
    </LinearGradient>
  );
}
