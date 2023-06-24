import { StyleProp, View, Text, Image } from "react-native";
import styles from "./styles";
import React, { useState } from "react";

interface CardProps {
  id: string;
  name: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ id, name, image }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pokemonId}>{id}</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};

export default Card;
