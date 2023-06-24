import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DC0A2D",
    width: "100%",
    height: "100%",
    padding: 4,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
    gap: 10,
  },
  header: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 24,
    gap: 8,
  },
  modalHeader: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: "left",
  },
  subContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    // width: "100%",
    overflow: "hidden",
    height: "100%",
    paddingTop: 24,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 50,
    borderRadius: 8,
    boxShadow: "0px 1px 3px 1px #00000040 inset",
  },
});

export default styles;
