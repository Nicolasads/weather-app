import styled from "styled-components/native";

export const Card = styled.TouchableOpacity`
  background-color: #ffff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
  border-width: 1px;
  border-color: #c1c1c1;
`;

export const FavoriteText = styled.Text`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const CardWithoutTouchable = styled.View`
  background-color: #ffff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
  border-width: 1px;
  border-color: #c1c1c1;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardHeaderText = styled.Text`
  font-size: 20px;
  color: #595959;
`;
export const CardHeaderSub = styled.Text`
  font-size: 16px;
  color: #959595;
`;
export const CardHeaderTemp = styled.Text`
  font-size: 22px;
  color: #676767;
`;

export const CardBody = styled.View`
  margin-top: 18px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WeatherType = styled.Text`
  color: #008df3;
`;

export const WeatherTemp = styled.Text`
  margin-top: 5px;
`;

export const FavoriteButton = styled.TouchableOpacity``;

export const RemoveItemButton = styled.TouchableOpacity`
  margin-right: 15px;
`;
