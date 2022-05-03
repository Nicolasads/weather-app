import { Provider } from "react-redux";
import { store } from "./src/features/store/store";
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Toast from "react-native-toast-message";
import Routes from "./src/routes/routes";
import { ThemeProvider } from "styled-components";
import { globalTheme } from "./src/global/themes/globalTheme";
import Loading from "./src/components/Loading";

export default function App() {
  let persistor = persistStore(store);

  return (
    <NavigationContainer>
      <ThemeProvider theme={globalTheme}>
        <Provider store={store}>
          <PersistGate loading={<Loading />} persistor={persistor}>
            <Routes />
            <Toast />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
