import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: "104px",
    height: "108px",
    borderRadius: 8,
    boxShadow: "0px 1px 3px 1px #00000033",
  },
  imageContainer: {
    flex: 1,
    resizeMode: "contain",
    alignItems: "center",
    zIndex: 10,
  },
  image: {
    height: 72,
    width: 72,
  },
  nameContainer: {
    backgroundColor: "#EFEFEF",
    width: "100%",
    height: "44px",
    borderRadius: 8,
    bottom: 0,
    position: "absolute",
    paddingTop: 24,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
  },
  name: {
    textAlign: "center",
    lineHeight: 16,
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "Poppins",
    color: "#1D1D1D",
    letterSpacing: 0,
  },
  pokemonId: {
    fontWeight: "400",
    fontSize: 10,
    textAlign: "right",
    lineHeight: 12,
    color: "#666666",
    marginRight: 8,
    marginTop: 4,
  },
});

export default styles;
