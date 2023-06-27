import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

interface IPokemonAboutProps {
  propertyName: string;
  value: JSX.Element;
  style?: object;
}

const PokemonAbout: React.FC<IPokemonAboutProps> = ({
  propertyName,
  value,
  style,
}) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      {value}
      <Text style={styles.propertyName}>{propertyName}</Text>
    </View>
  );
};

export default PokemonAbout;
