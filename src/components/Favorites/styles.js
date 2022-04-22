import styled from "styled-components/native";

export const FavoriteText = styled.Text`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 15px;
`;

export const Card = styled.TouchableOpacity`
  background-color: #fff;
  min-width: 50px;
  min-height: 50px;
  height: auto;
  width: auto;
  border-width: 1px;
  border-color: #d1d1d1;
  border-radius: 8px;
  margin-right: 10px;
  margin-top: 10px;
  padding: 12px 15px 0px;
`;

export const CardContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const CardTitle = styled.Text`
  color: #595959;
  font-size: 18px;
`;

export const CardSubtitle = styled.Text`
  color: #959595;
  padding-left: 5px;
  font-size: 16px;
`;

export const TempValue = styled.Text`
  color: #008df3;
  font-size: 20px;
`;

export const MinMax = styled.Text`
  color: #8f8f8f;
  padding-top: 10px;
  padding-left: 5px;
  padding-bottom: 10px;
`;

export const RemoveFavorite = styled.TouchableOpacity`
  margin-bottom: 10px;
`;
