import React, { useEffect, useState } from "react";
import { Text, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { api } from "../../services/api";
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
  WeatherList,
} from "./styles";
import sun from "../../assets/sun.png";
import WeatherForecast from "../../components/WeatherForecast";

export default function WeatherDetails({ route }) {
  const [weatherData, setWeatherData] = useState([]);
  const { item } = route.params;

  // useEffect(() => {
  //   api
  //     .get(
  //       "onecall?lat=-23.5475&lon=-46.6361&cnt=5&appid=2d2cb4371aebf9d61b381194aaf80784&exclude=minutely,hourly"
  //     )
  //     .then((response) => setWeatherData(response.data));

  //   console.log(weatherData);
  // }, []);

  return (
    <LinearGradient
      colors={["#A1CDFF", "#C2DEFF", "#FEFEFF"]}
      style={{ flex: 1, paddingTop: 50, paddingHorizontal: 20 }}
    >
      <Header>
        <BackButton>
          <BackButtonText>Voltar</BackButtonText>
        </BackButton>
      </Header>

      <Body>
        <TempDatas>
          <Image source={sun} />

          <View>
            <Temperature> {Math.round(item.temp)}ºC </Temperature>
            <MinMax>
              {Math.round(item.temp_min)}ºC - {Math.round(item.temp_max)}ºC
            </MinMax>
          </View>
        </TempDatas>

        <CityInfos>
          <CityWeather>
            {item.weather.map((item) => item.description)}
          </CityWeather>
          <CityName>{item.name}</CityName>
        </CityInfos>

        <WeatherList>
          <WeatherForecast />
        </WeatherList>
      </Body>
    </LinearGradient>
  );
}
