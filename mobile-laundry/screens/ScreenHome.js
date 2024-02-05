import { Button, Text, View } from "react-native";
import { Appbar } from "react-native-paper";

const ScreenHome = ({ navigation, route }) => {
  const toAbout = () => {
    navigation.navigate("ScreenAbout", { nama: "Cynthia" });
  };

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Sign In" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <Text>Home Screen</Text>
      <Button title="About me" onPress={toAbout} />
    </View>
  );
};

export default ScreenHome;
