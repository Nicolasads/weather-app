import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Modal, TextInput, Alert } from "react-native";
import { AsyncCard } from "../Card";
import {
  AddCity,
  CardBody,
  CardHeader,
  CardHeaderSub,
  CardHeaderText,
  CloseModal,
  CloseModalText,
  Container,
  Content,
  CountryResult,
  Header,
  HeaderText,
  InputView,
  SearchButton,
  SearchView,
} from "./styles";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addCityItem } from "../../features/cities/citiesSlice";

export default function AddCountry({ visible, close }) {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const getCity = async () => {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d2cb4371aebf9d61b381194aaf80784&exclude=minutely&units=metric&lang=pt`
    );

    setData(result.data);
    console.log("resultado", result.data);
  };

  const addCidade = (item) => {
    const pseudoId = new Date().getTime();

    const data = {
      id: pseudoId,
      name: item.name,
      uf: item.sys.country,
      lat: item.coord.lat,
      lon: item.coord.lon,
      temp: item.main.temp,
      temp_max: item.main.temp_max,
      temp_min: item.main.temp_min,
      weather: item.weather,
    };

    dispatch(addCityItem(data));
  };

  return (
    <Modal animationType="slide" visible={visible} onRequestClose={close}>
      <Container>
        <Header>
          <View></View>

          <HeaderText>Adicionar Cidade</HeaderText>

          <CloseModal onPress={close}>
            <CloseModalText>Fechar</CloseModalText>
          </CloseModal>
        </Header>

        <Content>
          <SearchView>
            <InputView>
              <TextInput
                placeholder="Pesquisar Cidade"
                onChangeText={(e) => setCity(e)}
              />
            </InputView>

            <SearchButton onPress={() => getCity()}>
              <Feather name="search" size={24} color="#fff" />
            </SearchButton>
          </SearchView>

          <CountryResult>
            {data.length !== 0 ? (
              <AsyncCard>
                <CardHeader>
                  <CardHeaderText> {data.name} </CardHeaderText>
                  <CardHeaderSub>{data.sys.country}</CardHeaderSub>
                </CardHeader>

                <CardBody>
                  <AddCity onPress={() => addCidade(data)}>
                    <Text style={{ color: "#008df3", fontSize: 15 }}>
                      Adicinar Cidade
                    </Text>
                  </AddCity>
                </CardBody>
              </AsyncCard>
            ) : null}
          </CountryResult>
        </Content>
      </Container>
    </Modal>
  );
}