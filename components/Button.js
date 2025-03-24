// Button.js
import { Pressable, Text, StyleSheet } from "react-native";

export default function Button({ title, onPress, color = "#000", bgColor = "#fff", width = "auto" }) {
  return (
    <Pressable style={[styles.button, { backgroundColor: bgColor, width }]} onPress={onPress}>
      <Text style={[styles.text, { color: color }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    margin: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
