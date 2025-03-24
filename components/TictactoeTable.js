import { useContext } from "react";
import { View, Image, Pressable, StyleSheet } from "react-native";
import TictactoeContext from "../context/TictactoeContext";

export default function TictactoeTable() {
  const { board, handleCellPress } = useContext(TictactoeContext);

  return (
    <View style={styles.grid}>
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Pressable key={`${rowIndex}-${colIndex}`} style={styles.cell} onPress={() => handleCellPress(rowIndex, colIndex)}>
            {cell === "X" && <Image source={require("../assets/images/multiply.png")} style={styles.icon} />}
            {cell === "O" && <Image source={require("../assets/images/circle.png")} style={styles.icon} />}
          </Pressable>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 300,
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  cell: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "white",
    margin: 3,
    borderRadius: 5,
  },
  icon: {
    width: 60,
    height: 60,
  },
});
