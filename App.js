import { Provider } from "react-redux";
import { store } from "./src/features/store/store";
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Toast from "react-native-toast-message";
import Routes from "./src/routes/routes";
import { ActivityIndicator, View } from "react-native";

export default function App() {
  let persistor = persistStore(store);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate
          loading={
            <View style={{ flex: 1, justifyContent: "center" }}>
              <ActivityIndicator size="large" color="lightblue" />
            </View>
          }
          persistor={persistor}
        >
          <Routes />
          <Toast />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
