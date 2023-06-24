import { StyleSheet } from "react-native";

const buttonHeight = 36;
const borderRadius = buttonHeight / 2;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#FFFFFF",
    width: 300,
    height: buttonHeight,
    borderRadius: borderRadius,
    // padding: 8px 16px 8px 12px,
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 8,
    paddingBottom: 12,
    gap: 8,
    // box-shadow: 0px 1px 3px 1px #00000040 inset;
    boxShadow: "0px 1px 3px 1px #00000040 inset",
  },
});

export default styles;
