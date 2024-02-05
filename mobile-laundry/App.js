import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ListBelanja from "./components/ListBelanja";
import FormSignIn from "./components/FormSignIn";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenHome from "./screens/ScreenHome";
import ScreenAbout from "./screens/ScreenAbout";
import ScreenAuthSignIn from "./screens/auth/ScreenAuthSignIn";
import { CONTEXT_APP } from "./settings";

const Stack = createStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <CONTEXT_APP.Provider value={(isAuthenticated, setIsAuthenticated)}>      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ScreeenAuthSignIn"
            component={ScreenAuthSignIn}
            options={{ title: "Home", headerShown: false }}
          />
          <Stack.Screen name="ScreenAbout" component={ScreenAbout} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" hidden={true} />
    </CONTEXT_APP.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  },
  textHeading1: {
    fontSize: 20,
    color: "#000088",
  },
  btn: {
    border: 1,
    padding: 16,
    backgroundColor: "tomato",
  },
  btn_text: {
    color: "white",
  },

  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
