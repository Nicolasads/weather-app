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
import { api, app_key } from "../../services/api";

export default function AddCountry({ visible, close }) {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [weatherResult, setWeatherResult] = useState({});

  const dispatch = useDispatch();

  const getCity = async () => {
    const result = await api.get(
      `weather?q=${city}&appid=${app_key}&exclude=minutely&units=metric&lang=pt`
    );

    setData(result.data);

    if (data !== null) {
      api
        .get(
          `weather?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${app_key}&lang=pt&units=metric`
        )
        .then((response) => {
          setWeatherResult(response.data);
        });
    }
  };

  const addCidade = (item, bool) => {
    const pseudoId = new Date().getTime();

    const data = {
      id: pseudoId,
      name: item.name,
      uf: item.sys.country,
      lat: item.coord.lat,
      lon: item.coord.lon,
      temp: weatherResult.main.temp,
      temp_max: weatherResult.main.temp_max,
      temp_min: weatherResult.main.temp_min,
      weather: weatherResult.weather,
    };

    dispatch(addCityItem(data));

    Toast.show({
      type: "success",
      text1: "Aviso",
      text2: "Cidade adicionada com sucesso",
      position: "bottom",
    });

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
            ) : null}
          </CountryResult>
        </Content>
      </Container>
    </Modal>
  );
}
