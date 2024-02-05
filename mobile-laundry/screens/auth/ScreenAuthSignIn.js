import { StyleSheet, View } from "react-native";
import { Appbar, TextInput, Button } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import useJWT from "../../hooks/useJWT";
import useHTTP from "../../hooks/useHTTP";
import { useState } from "react";
import { BASE_URL } from "../../settings";

const ScreenAuthSignIn = ({ navigation, route }) => {
  const jwt = useJWT();
  const http = useHTTP();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChangeUser = (text, field) => {
    setUser({...user, [field]: text })
  };

  const SignIn = () => {
    http.publicHTTP
      .post(`${BASE_URL}/users/signin`, user)
      .then((res) => {
        jwt.set(res.data.token);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <View>
        <Appbar>
          <Appbar.Content title="Sign In" />
        </Appbar>

        <View style={styles.container}>
          <View style={styles.wrapperControl}>
            <TextInput
              label="Email"
              autoCapitalize="none"
              value={user.email}
              onChangeText={(text) => handleChangeUser(text, "email")}
            />
          </View>
          <View style={styles.wrapperControl}>
            <TextInput
              label="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              // value={user.password}
              onChangeText={(text) => handleChangeUser(text, "password")}
            />
          </View>
          <View style={styles.wrapperControl}>
            <Button
              icon="account-lock-open-outline"
              mode="contained"
              onPress={SignIn}
            >
              Sign in
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "90%",
    paddingHorizontal: 24,
    gap: 32,
  },
  wrapperControl: {
    width: "100%",
  },
});

export default ScreenAuthSignIn;
