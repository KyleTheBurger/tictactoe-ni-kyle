import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TictactoeProvider } from "./context/TictactoeContext";
import StartGameScreen from "./views/StartGameScreen";
import InGameScreen from "./views/InGameScreen";

export default function App() {
  const [screenNum, setScreenNum] = useState(1);

  function changeScreenHandler(num) {
    setScreenNum(num);
  }

  let screen;
  if (screenNum === 1) {
    screen = <StartGameScreen onScreenChange={changeScreenHandler} />;
  } else if (screenNum === 2) {
    screen = <InGameScreen onScreenChange={changeScreenHandler} />;
  }

  return (
    <TictactoeProvider>
      <View style={styles.container}>{screen}</View>
    </TictactoeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
});
