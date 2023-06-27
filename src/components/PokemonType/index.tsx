import React from "react";
import { View, Text } from "react-native";
import { IPokemonType } from "../../shared/interfaces/IPokemon";
import styles from "./styles";
import { POKEMON_TYPES_COLORS } from "../../shared/enums/PokemonTypesColors";

interface PokemonTypeProps {
  type: string;
}

const PokemonType: React.FC<PokemonTypeProps> = ({ type }) => {
  const handleBackgroundColor = (type: string) => {
    return POKEMON_TYPES_COLORS[
      type.toUpperCase() as keyof typeof POKEMON_TYPES_COLORS
    ];
  };
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: handleBackgroundColor(type),
      }}
    >
      <Text style={styles.text}>{type}</Text>
    </View>
  );
};

export default PokemonType;
