import { StyleSheet } from "react-native";

const buttonSize = 38;
const borderRadius = buttonSize / 2;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFFFFF",
    width: buttonSize,
    height: buttonSize,
    borderRadius: borderRadius,
    padding: 8,
    gap: 8,
    boxShadow: "0px 1px 3px 1px #00000040 inset",
  },
  text: {
    textAlign: "center",
    color: "#DC0A2D",
    fontWeight: "600",
    fontSize: 18,
  },
});

export default styles;
