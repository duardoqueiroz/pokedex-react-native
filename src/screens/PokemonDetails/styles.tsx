import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 4,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 10,
    gap: 8,
  },
  headerNavigation: {
    flexDirection: "row",
    gap: 12,
  },
  headerIcon: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: 24,
    fontWeight: "700",
  },
  headerId: {
    color: "#FFFFFF",
    // fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "700",
  },
  blankContainer: {
    alignItems: "center",
    height: 130,
    zIndex: 10,
  },
  pokemonNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  pokemonNavigationIcon: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  image: {
    position: "absolute",
    marginTop: 80,
    alignSelf: "center",
    height: 200,
    width: 200,
    zIndex: 10,
  },
  pokemonTypes: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  about: {
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 16,
  },
  blockContentContainer: {
    marginTop: 40,
  },
  aboutData: {
    flexDirection: "row",
    paddingVertical: 16,
  },
  weightIcon: {
    fontSize: 16,
  },
  heightContainer: {
    borderStartWidth: 1,
    borderEndWidth: 1,
    borderColor: "#E2E2E2",
  },
  heightIcon: {
    fontSize: 20,
  },
  baseStatsLabel: {
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 16,
  },
  baseStatsDataContainer: {
    marginTop: 20,
  },
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
  subContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 15,
    height: "100%",
    flex: 1,
    bottom: 0,
  },
});

export default styles;
