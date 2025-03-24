import { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import TictactoeContext from "../context/TictactoeContext";
import GameStatistic from "../components/GameStatistic";
import TictactoeTable from "../components/TictactoeTable";
import Button from "../components/Button";
import PopUp from "../components/PopUp";

export default function InGameScreen({ onScreenChange }) {
  const { winner, resetBoard, nextRound } = useContext(TictactoeContext);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (winner) {
      setShowPopup(true);
    }
  }, [winner]); // Pop-up will appear when winner changes

  function handleNextRound() {
    setShowPopup(false);
    //resetBoard();
    nextRound();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TICTACTOE NI KYLE</Text>
      <GameStatistic />
      <TictactoeTable />
      <Button title="NEW GAME" onPress={resetBoard} width="200" />
      <Button title="EXIT GAME" onPress={() => onScreenChange(1)} width="200" />
      {showPopup && <PopUp message={winner === "Draw" ? "IT'S A DRAW!" : `${winner} WINS!`} onClose={handleNextRound} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 50,
  },
});
