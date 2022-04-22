import { Provider } from "react-redux";
import { store } from "./src/features/store/store";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import Routes from "./src/routes/routes";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Routes />
        <Toast />
      </Provider>
    </NavigationContainer>
  );
}
