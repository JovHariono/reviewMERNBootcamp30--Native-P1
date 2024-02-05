import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { BASE_URL } from "../settings"
import AsyncStorage from '@react-native-async-storage/async-storage';
import useJWT from "../hooks/useJWT";
import useHTTP from "../hooks/useHTTP";

const FormSignIn = () => {
  const jwt = useJWT()
  const http = useHTTP()

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChangeUser = (text, field) => {
    let userTemp = user;
    userTemp[field] = text;
    setUser(userTemp);
  };

  const SignIn = () => {
    http.publicHTTP
      .post(`${BASE_URL}/users/signin`, user)
      .then((res) => {
        jwt.set(res.data.token)
      })
      .catch((err) => console.log(err))
  };

  return (
    <View style={styles.container}>
      <View style={styles.signInWrapper}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Email.."
            autoCapitalize="none"
            placeholderTextColor={"#ced4da"}
            onChangeText={(text) => handleChangeUser(text, "email")}
            style={styles.input}
          />
        </View>

        <View style={styles.formControl}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="password.."
            autoCapitalize="none"
            placeholderTextColor={"#ced4da"}
            onChangeText={(text) => handleChangeUser(text, "password")}
            style={styles.input}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.formControl}>
          <TouchableOpacity onPress={SignIn}>
            <Text style={styles.btn}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#001524",
  },
  signInWrapper: {
    width: "70%",
  },
  formControl: {
    paddingVertical: 4,
  },
  label: {
    marginVertical: 10,
    color: "#ffecd1",
  },
  input: {
    backgroundColor: "#15616d",
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 15,
    borderRadius: 5,
    color: "#ffecd1",
  },
  btn: {
    textAlign: "center",
    width: "100%",
    backgroundColor: "#ff7f00",
    paddingVertical: 16,
    fontWeight: "bold",
    color: "#001524",
    marginVertical: 10,
    borderRadius: 10,
  },
});

export default FormSignIn;
