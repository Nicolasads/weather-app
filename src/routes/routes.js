import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Cities from "../screens/Cities";
import WeatherDetails from "../screens/WeatherDetails";

export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Cities"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Cities" component={Cities} />
      <Stack.Screen name="WeatherDetails" component={WeatherDetails} />
    </Stack.Navigator>
  );
}
