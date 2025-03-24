import { View, Text, Modal, StyleSheet } from "react-native";
import Button from "./Button";

export default function PopUp({ message, onClose }) {
  return (
    <Modal transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Text style={styles.message}>{message}</Text>
          <Button title="NEXT ROUND" onPress={onClose} bgColor="black" color="white" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  popup: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

//tig rrun mo man ni sir?