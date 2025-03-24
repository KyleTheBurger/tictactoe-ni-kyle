import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import TictactoeContext from "../context/TictactoeContext";

export default function GameStatistic() {
  const { scores } = useContext(TictactoeContext);

  return (
    <View style={styles.container}>
      {Object.entries(scores).map(([key, value]) => (
        <View key={key} style={styles.box}>
          <Text style={styles.label}>{key.toUpperCase()}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  box: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    fontSize: 18,
  },
});
