import { StyleSheet, Text } from "react-native";

export const Heading6 = () => {
  return <Text style={styles.heading6}>Heading 6</Text>;
};

export const Heading5 = () => {
  return <Text style={styles.heading5}>Heading 5</Text>;
};

const styles = StyleSheet.create({
  heading6: {
    color: "black",
    fontSize: 24,
    fontWeight: "400",
  },
  heading5: {
    color: "blue",
    fontSize: 32,
  },
});

// export default {Heading5};