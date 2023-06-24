import { StyleProp, TextInput, TextStyle, View } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/EvilIcons";

interface SearchBarProps {
  onChange?: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <TextInput
        onChangeText={onChange}
        style={styles.searchBar}
        placeholder="Search"
      ></TextInput>
      <Icon
        style={{ right: 30, position: "absolute" }}
        name="search"
        size={25}
        color="#DC0A2D"
      />
    </View>
  );
};

export default SearchBar;
