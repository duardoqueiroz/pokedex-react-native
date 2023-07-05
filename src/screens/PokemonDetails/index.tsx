import { useEffect, useState } from "react";
import {
  IPokemon,
  IPokemonStats,
  IPokemonType,
} from "../../shared/interfaces/IPokemon";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
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

interface NavigationProps {
  navigation: any;
  route: any;
}

const PokemonDetails = ({ navigation, route }: NavigationProps) => {
  const [mainColor, setMainColor] = useState<string>("#B8B8B8");
  const [index, setIndex] = useState<number>(route.params.index);
  const [pokemon, setPokemon] = useState<IPokemon>(
    route.params.pokemons[index]
  );

  useEffect(() => {
    setMainColor(handleMainColor(pokemon.types));
  });

  const resetPokemon = (index: number) => {
    if (index < 0) {
      index = route.params.pokemons.length - 1;
    }
    if (index > route.params.pokemons.length - 1) {
      index = 0;
    }
    setIndex(index);
    setPokemon(route.params.pokemons[index]);
  };

  const handleMainColor = (type: IPokemonType[]) => {
    return POKEMON_TYPES_COLORS[
      type[0].name.toUpperCase() as keyof typeof POKEMON_TYPES_COLORS
    ];
  };

  const renderPokemonTypes = (types: IPokemonType[]) => {
    return pokemon.types.map((type: any, index: number) => {
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
          key={`${move.charAt(0)}-${index}`}
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
      <View>
        <Image
          style={{
            width: 200,
            height: 200,
            position: "absolute",
            alignSelf: "flex-end",
            tintColor: "#FFFFFF",
            opacity: 0.2,
          }}
          source={require("../../../assets/Pokeball.png")}
        ></Image>
        <View style={styles.header}>
          <View style={styles.headerNavigation}>
            <Pressable onPress={() => navigation.navigate("Home")}>
              <Icon style={styles.headerIcon} name="arrowleft"></Icon>
            </Pressable>
            <Text style={styles.headerTitle}>{pokemon.name}</Text>
          </View>
          <View>
            <Text style={styles.headerId}>{pokemon.id}</Text>
          </View>
        </View>
        <View style={styles.blankContainer}></View>
        <View style={styles.pokemonNavigation}>
          <Pressable
            onPress={() => {
              resetPokemon(index - 1);
            }}
          >
            <MaIcon
              style={styles.pokemonNavigationIcon}
              name="arrow-back-ios"
            ></MaIcon>
          </Pressable>
          <Pressable
            onPress={() => {
              resetPokemon(index + 1);
            }}
          >
            <MaIcon
              style={styles.pokemonNavigationIcon}
              name="arrow-forward-ios"
            ></MaIcon>
          </Pressable>
        </View>
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
