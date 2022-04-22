import styled from "styled-components/native";

export const Header = styled.View``;

export const BackButton = styled.TouchableOpacity`
  background-color: #008df3;
  border-radius: 8px;
  width: 95px;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 6px 15px 6px;
`;

export const BackButtonText = styled.Text`
  color: #fff;
`;

export const Body = styled.View``;

export const TempDatas = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
`;

export const Temperature = styled.Text`
  font-size: 55px;
  font-weight: 700;
  color: #fff;
`;

export const MinMax = styled.Text`
  text-align: center;
  color: #6d6d6d;
  font-size: 16px;
`;

export const CityInfos = styled.View`
  margin-top: 18px;
  align-items: center;
`;

export const CityWeather = styled.Text`
  font-size: 23px;
  color: #ff9900;
  text-transform: capitalize;
`;

export const CityName = styled.Text`
  color: #fff;
  font-size: 45px;
  font-weight: 700;
`;

export const WeatherList = styled.View`
  flex: 1;
`;
