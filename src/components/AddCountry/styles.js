import styled from "styled-components/native";

export const Container = styled.View``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: #d1d1d1;
  border-bottom-width: 1px;
  padding: 20px 15px 10px;
`;

export const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #333;
`;

export const InputView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-width: 1px;
  border-color: #c1c1c1;
  border-radius: 8px;
  padding: 8px 15px 8px;
  width: 75%;
`;

export const CloseModal = styled.TouchableOpacity``;

export const CloseModalText = styled.Text`
  color: #008df3;
  font-size: 15px;
`;

export const Content = styled.ScrollView`
  margin-bottom: 20px;
`;

export const SearchView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 20px 5px 10px;
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: #008df3;
  height: 45px;
  justify-content: center;
  align-items: center;
  width: 60px;
  border-radius: 8px;
`;

export const CountryResult = styled.View`
  padding: 10px;
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

export const AddCity = styled.TouchableOpacity``;
