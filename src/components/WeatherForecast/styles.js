import styled from "styled-components/native";

export const WeatherTitle = styled.Text`
  color: #717171;
  margin: 12px 0px 12px;
  font-size: 16px;
`;

export const WeatherCard = styled.View`
  background-color: #ffff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
  border-width: 1px;
  border-color: #c1c1c1;
`;

export const WeatherCardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DayName = styled.Text`
  font-size: 20px;
  color: #444444;
  text-transform: capitalize;
`;

export const DateName = styled.Text`
  color: #808080;
`;

export const WeatherTemp = styled.Text`
  font-size: 30px;
  color: #008df3;
`;

export const WeatherCardBody = styled.View`
  margin-top: 10px;
`;

export const WeatherType = styled.Text`
  color: #008df3;
  font-size: 16px;
`;
export const MinMax = styled.Text`
  color: #848484;
`;
