import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  topData: {
    gap: 20,
    paddingVertical: 8,
    alignItems: "center",
  },
  propertyName: {
    fontFamily: "Poppins",
    fontSize: 12,
    color: "#666666",
    paddingVertical: 8,
  },
  propertyValue: {
    fontFamily: "Poppins",
    fontSize: 14,
    color: "#1D1D1D",
  },
});

export default styles;
