import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  baseStatsRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 20,
  },
  baseStatsDataLabel: {
    width: 60,
    textAlign: "right",
    fontWeight: "bold",
    borderEndColor: "#E2E2E2",
    borderEndWidth: 1,
    paddingRight: 15,
    paddingVertical: 1,
  },
  statsBar: {
    flex: 1,
    height: 5,
    backgroundColor: "#E2E2E2",
    width: "100%",
    borderRadius: 8,
  },
  statsBarFill: {
    height: 5,
    borderRadius: 8,
  },
});

export default styles;
