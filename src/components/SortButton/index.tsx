import React from "react";
import { StyleProp, TextStyle, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface IPropsTextButton {
  label: string;
  onClick?: () => void;
}
const SortButton: React.FC<IPropsTextButton> = ({ label, onClick }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};
export default SortButton;
