import React, { useState } from "react";
import { Text, TextInput, Switch } from "react-native";
import { useSelector } from "react-redux";
import { getCitiesList } from "../../features/cities/citiesSlice";

import { CitiesList } from "../../components/CitiesList";
import AddCountry from "../../components/AddCountry";
import Favorites from "../../components/Favorites";

import { Feather } from "@expo/vector-icons";
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
import { globalTheme } from "../../global/themes/globalTheme";

export default function Cities() {
  const [temperature, setTemperature] = useState(false);
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  const toggleSwitch = () => setTemperature((previousState) => !previousState);

  const getCities = useSelector(getCitiesList);

  const changeModalVisible = (bool) => {
    setVisible(bool);
  };

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
          <TextInput
            placeholder="Filtrar cidade"
            onChangeText={(e) => setSearchText(e)}
          />
          <Feather name="search" size={24} color="#b1b1b1" />
        </InputView>

        <Switch
          trackColor={{
            false: globalTheme.mediumGrey,
            true: globalTheme.blue,
          }}
          thumbColor={globalTheme.white}
          ios_backgroundColor={globalTheme.darkGrey}
          onValueChange={toggleSwitch}
          value={temperature}
          style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
        />

        <Text> {temperature === true ? "ºF" : "ºC"} </Text>
      </Filters>

      <Favorites changeMetric={temperature} />

      <Content>
        <CitiesList
          data={getCities}
          changeMetric={temperature}
          filter={searchText}
        />
      </Content>

      <AddCountry visible={visible} close={changeModalVisible} />
    </Container>
  );
}
