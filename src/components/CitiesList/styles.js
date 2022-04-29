import styled from "styled-components/native";

export const Card = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
  border-width: 1px;
  border-color: ${(props) => props.theme.lightGrey};
`;

export const FavoriteText = styled.Text`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const CardWithoutTouchable = styled.View`
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
  border-width: 1px;
  border-color: ${(props) => props.theme.lightGrey};
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardHeaderText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.darkGrey};
`;
export const CardHeaderSub = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.mediumGrey};
`;
export const CardHeaderTemp = styled.Text`
  font-size: 22px;
  color: ${(props) => props.theme.grey};
`;

export const CardBody = styled.View`
  margin-top: 18px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WeatherType = styled.Text`
  color: ${(props) => props.theme.blue};
`;

export const WeatherTemp = styled.Text`
  margin-top: 5px;
`;

export const FavoriteButton = styled.TouchableOpacity``;

export const RemoveItemButton = styled.TouchableOpacity`
  margin-right: 15px;
`;

export const NullItemText = styled.Text`
  color: ${(props) => props.theme.darkGrey};
  text-align: center;
  font-size: 20px;
  margin: 10px 5px 20px;
  font-weight: 700;
`;
export const NullItemDesc = styled.Text`
  text-align: center;
  color: ${(props) => props.theme.mediumGrey};
`;
