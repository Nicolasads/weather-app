import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, Switch } from "react-native";
import { useSelector } from "react-redux";
import { CardComponent } from "../../components/Card";
import AddCountry from "../../components/AddCountry";
import {
  AddButton,
  AddButtonText,
  Container,
  Content,
  Filters,
  Header,
  HeaderText,
  InputView,
} from "./styles";
import { getCitiesList } from "../../features/cities/citiesSlice";

export default function Cities() {
  const [temperature, setTemperature] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleSwitch = () => setTemperature((previousState) => !previousState);

  const getCities = useSelector(getCitiesList);

  return (
    <Container>
      <Header>
        <HeaderText> Cidades </HeaderText>
        <AddButton
          onPress={() => {
            setVisible(true);
          }}
        >
          <AddButtonText> Adicionar Cidade +</AddButtonText>
        </AddButton>
      </Header>

      <Filters>
        <InputView>
          <TextInput placeholder="Filtrar cidade" />
          <Feather name="search" size={24} color="#333" />
        </InputView>

        <Switch
          trackColor={{ false: "#767577", true: "#008df3" }}
          thumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={temperature}
          style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
        />

        <Text> {temperature === true ? "ºF" : "ºC"} </Text>
      </Filters>

      <Content>
        {getCities.length !== 0 && (
          <CardComponent data={getCities} changeMetric={temperature} />
        )}
      </Content>

      <AddCountry visible={visible} close={() => setVisible(false)} />
    </Container>
  );
}
