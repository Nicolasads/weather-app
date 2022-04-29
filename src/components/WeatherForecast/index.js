import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import moment from "moment-timezone";
import "moment/locale/pt-br";
import { WEATHER_API_KEY } from "@env";

import {
  DateName,
  DayName,
  MinMax,
  WeatherCard,
  WeatherCardBody,
  WeatherCardHeader,
  WeatherTemp,
  WeatherTitle,
  WeatherType,
} from "./styles";

export default function WeatherForecast({ data, changeMetric }) {
  const [timezone, setTimezone] = useState({});
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    api
      .get(
        `onecall?lat=${data.lat}&lon=${data.lon}&appid=${WEATHER_API_KEY}&exclude=minutely,hourly&lang=pt&units=metric`
      )
      .then((response) => {
        setTimezone(response.data.timezone);
        setForecastData(response.data.daily);
      });
  }, [data]);

  const convertToF = (celsius) => {
    return Math.round((celsius * 9) / 5 + 32);
  };

  const renderItem = (item) => {
    const date = moment(item.dt * 1000);

    return (
      <>
        <WeatherCard>
          <WeatherCardHeader>
            <View>
              <DayName>{date.tz(timezone).format("dddd")}</DayName>
              <DateName>{date.tz(timezone).format("LL")}</DateName>
            </View>

            <WeatherTemp>
              {" "}
              {changeMetric
                ? convertToF(item.temp.day) + "ºF"
                : Math.round(item.temp.day) + "ºC"}{" "}
            </WeatherTemp>
          </WeatherCardHeader>

          <WeatherCardBody>
            <WeatherType>
              {item.weather.map((weather) => weather.description)}
            </WeatherType>
            <MinMax>
              {changeMetric
                ? convertToF(item.temp.min) + "ºF"
                : Math.round(item.temp.min) + "ºC"}{" "}
              -{" "}
              {changeMetric
                ? convertToF(item.temp.max) + "ºF"
                : Math.round(item.temp.max) + "ºC"}
            </MinMax>
          </WeatherCardBody>
        </WeatherCard>
      </>
    );
  };

  return (
    // <Text>Teste</Text>
    <FlatList
      data={forecastData}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item, index) => index}
      ListHeaderComponent={<WeatherTitle>Próximos dias</WeatherTitle>}
      showsVerticalScrollIndicator={false}
    />
  );
}
