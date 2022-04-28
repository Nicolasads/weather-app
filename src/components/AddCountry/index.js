import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Modal, TextInput } from "react-native";
import Toast from "react-native-toast-message";
import {
  AddCity,
  Card,
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
import { addCityItem } from "../../features/cities/citiesSlice";
import { api } from "../../services/api";
import { WEATHER_API_KEY } from "@env";

export default function AddCountry({ visible, close }) {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [nullResult, setNullResult] = useState("");

  const dispatch = useDispatch();

  const getCity = async () => {
    try {
      const result = await api.get(
        `weather?q=${city}&appid=${WEATHER_API_KEY}&exclude=minutely&units=metric&lang=pt`
      );

      setData(result.data);
      setNullResult(result.status);
      console.log("status", result.status);
    } catch (error) {
      console.log("erro", error);
      setNullResult(0);
    }
  };

  const addCidade = (item, bool) => {
    const pseudoId = new Date().getTime();

    const data = {
      id: pseudoId,
      name: item.name,
      uf: item.sys.country,
      lat: item.coord.lat,
      temp: item.main.temp,
      lon: item.coord.lon,
      temp_max: item.main.temp_max,
      temp_min: item.main.temp_min,
      weather: item.weather,
    };

    dispatch(addCityItem(data));

    close(bool);
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
              nullResult == 200 ? (
                <Card>
                  <CardHeader>
                    <CardHeaderText> {data.name} </CardHeaderText>
                    <CardHeaderSub>{data.sys.country}</CardHeaderSub>
                  </CardHeader>

                  <CardBody>
                    <AddCity onPress={() => addCidade(data, false)}>
                      <Text style={{ color: "#008df3", fontSize: 15 }}>
                        Adicinar Cidade
                      </Text>
                    </AddCity>
                  </CardBody>
                </Card>
              ) : (
                <View>
                  <HeaderText>
                    O resultado da sua pesquisa não foi encontrado.
                  </HeaderText>
                </View>
              )
            ) : null}
          </CountryResult>
        </Content>
      </Container>
    </Modal>
  );
}
