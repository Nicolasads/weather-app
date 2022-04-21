import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 50px 18px 0px;
  background-color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  font-size: 30px;
  font-weight: 700;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #008df3;
  padding: 7px 10px 7px;
  border-radius: 10px;
`;

export const AddButtonText = styled.Text`
  color: #fff;
`;

export const Filters = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;

export const InputView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-width: 1px;
  border-color: #777;
  border-radius: 8px;
  padding: 8px 15px 8px;
  width: 75%;
`;

export const Content = styled.View`
  margin-top: 25px;
`;

export const Card = styled.TouchableOpacity`
  background-color: #ffff;
  border-radius: 10px;
  padding: 20px;
  border-color: #c1c1c1;
  border-width: 1px;
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
