import { View, Text, Image, StyleSheet } from "react-native";
import Button from "../components/Button";

export default function StartGameScreen({ onScreenChange }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TICTACTOE NI KYLE</Text>
      <Image source={require("../assets/images/icon.png")} style={styles.icon} />
      <Button title="START GAME" onPress={() => onScreenChange(2)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  icon: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});