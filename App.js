import { Provider } from "react-redux";
import Routes from "./src/routes/routes";
import { store } from "./src/features/store/store";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Routes />
      </Provider>
    </NavigationContainer>
  );
}
