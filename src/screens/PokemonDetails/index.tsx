import { useEffect, useState } from "react";
import {
  IPokemon,
  IPokemonStats,
  IPokemonType,
} from "../../shared/interfaces/IPokemon";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/AntDesign";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import MaIcon from "react-native-vector-icons/MaterialIcons";
import PokemonType from "../../components/PokemonType";
import { POKEMON_TYPES_COLORS } from "../../shared/enums/PokemonTypesColors";
import PokemonAbout from "../../components/PokemonAbout";
import { POKEMON_STATS } from "../../shared/enums/PokemonStats";
import PokemonStats from "../../components/PokemonStats";
interface IPokemonDetailsProps {
  pokemon: IPokemon;
}

const PokemonDetails: React.FC<IPokemonDetailsProps> = ({ pokemon }) => {
  const [mainColor, setMainColor] = useState<string>("#B8B8B8");

  useEffect(() => {
    setMainColor(handleMainColor(pokemon.types));
  });

  const handleMainColor = (type: IPokemonType[]) => {
    return POKEMON_TYPES_COLORS[
      type[0].name.toUpperCase() as keyof typeof POKEMON_TYPES_COLORS
    ];
  };

  const renderPokemonTypes = (types: IPokemonType[]) => {
    return pokemon.types.map((type, index) => {
      return <PokemonType type={type.name}></PokemonType>;
    });
  };

  const renderPokemonMoves = (moves: string[]) => {
    moves = moves.slice(0, 2);
    const elements = moves.map((move, index) => {
      return (
        <Text
          style={{
            textAlign: "center",
          }}
          key={index}
        >
          {move}
        </Text>
      );
    });
    return elements;
  };

  const renderPokemonStats = (stats: IPokemonStats[]) => {
    return stats.map((stat) => {
      return (
        <PokemonStats
          key={stat.name}
          stat={stat}
          mainColor={mainColor}
        ></PokemonStats>
      );
    });
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: mainColor,
      }}
    >
      <View style={styles.headerContainer}>
        {/* <Image source={require("../../../assets/Pokeball.png")}></Image> */}
        <View style={styles.header}>
          <View style={styles.headerNavigation}>
            <Icon style={styles.headerIcon} name="arrowleft"></Icon>
            <Text style={styles.headerTitle}>{pokemon.name}</Text>
          </View>
          <View>
            <Text style={styles.headerId}>{pokemon.id}</Text>
          </View>
        </View>
        <View style={styles.blankContainer}></View>
      </View>
      <Image style={styles.image} source={{ uri: pokemon.image }}></Image>

      {/* ------- STATS --------- */}
      <View style={styles.subContainer}>
        {/* -------- TYPES --------- */}
        <View style={styles.pokemonTypes}>
          {renderPokemonTypes(pokemon.types)}
        </View>

        {/* -------- ABOUT --------- */}
        <View style={styles.blockContentContainer}>
          <View>
            <Text style={{ ...styles.about, color: mainColor }}>About</Text>
          </View>
          <View style={styles.aboutData}>
            <PokemonAbout
              propertyName="Weight"
              value={
                <View
                  style={{
                    gap: 12,
                    paddingVertical: 10,
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <FaIcon
                    name="weight-hanging"
                    style={styles.weightIcon}
                  ></FaIcon>
                  <Text>{pokemon.weight} kg</Text>
                </View>
              }
            ></PokemonAbout>
            <PokemonAbout
              propertyName="Height"
              value={
                <View
                  style={{
                    gap: 12,
                    paddingVertical: 10,
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <MaIcon name="straighten" style={styles.heightIcon}></MaIcon>
                  <Text>{pokemon.height} m</Text>
                </View>
              }
              style={styles.heightContainer}
            ></PokemonAbout>
            <PokemonAbout
              propertyName="Moves"
              value={
                <View>
                  <ScrollView>{renderPokemonMoves(pokemon.moves)}</ScrollView>
                </View>
              }
              style={{
                paddingVertical: 2,
              }}
            ></PokemonAbout>
          </View>
        </View>

        {/* -------- BASE STATS --------- */}
        <View style={styles.blockContentContainer}>
          <View>
            <Text style={{ ...styles.baseStatsLabel, color: mainColor }}>
              Base Stats
            </Text>
          </View>
          <View style={styles.baseStatsDataContainer}></View>
          <ScrollView>{renderPokemonStats(pokemon.stats)}</ScrollView>
        </View>
      </View>
    </View>
  );
};

export default PokemonDetails;
