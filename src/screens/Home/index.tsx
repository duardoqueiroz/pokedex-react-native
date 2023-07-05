import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import styles from "./styles";
import Card from "../../components/Card/index";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
import SearchBar from "../../components/SearchBar";
import SortButton from "../../components/SortButton";
import SortModal from "../../components/SortModal";
import { IPokemon } from "../../shared/interfaces/IPokemon";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

enum SORT_BY {
  CODE = 0,
  NAME = 1,
}

interface Props {
  navigation: any;
}

const Home = ({ navigation }: Props) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<IPokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [visible, setVisible] = useState(false);
  const [sortBy, setSortBy] = useState(SORT_BY.CODE);

  const radioProps = [
    { label: "Code", value: SORT_BY.CODE },
    { label: "Name", value: SORT_BY.NAME },
  ];

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const { data } = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
        );
        const pokemonsList: IPokemon[] = [];
        for (const pokemon of data.results) {
          const { data } = await axios.get(pokemon.url);
          pokemonsList.push({
            id: `${"#" + data.id.toString().padStart(3, "0")}`,
            image: data.sprites.other["official-artwork"].front_default,
            name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            weight: data.weight,
            height: data.height,
            stats: data.stats.map((stat: any) => {
              return {
                value: stat.base_stat,
                name:
                  stat.stat.name.charAt(0).toUpperCase() +
                  stat.stat.name.slice(1),
              };
            }),
            types: data.types.map((type: any) => {
              return {
                slot: type.slot,
                name:
                  type.type.name.charAt(0).toUpperCase() +
                  type.type.name.slice(1),
              };
            }),
            moves: data.moves.map((move: any) => {
              return move.move.name
                .charAt(0)
                .toUpperCase()
                .concat(move.move.name.slice(1));
            }),
          });
        }
        setPokemons(pokemonsList);
        setFilteredPokemons(pokemonsList);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemons();
  }, []);

  const renderCards = (pokemons: IPokemon[]) => {
    let cardElements: JSX.Element[] = [];
    let currentRow: Array<JSX.Element> = [];

    pokemons.forEach((pokemon: IPokemon, index: number) => {
      currentRow.push(
        <Pressable
          onPress={() =>
            navigation.navigate("PokemonDetails", {
              pokemons: pokemons,
              index: index,
            })
          }
        >
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
          />
        </Pressable>
      );

      if ((index + 1) % 3 === 0 || index === pokemons.length - 1) {
        cardElements.push(
          <View key={index} style={styles.cardRow}>
            {currentRow}
          </View>
        );

        currentRow = [];
      }
    });
    return cardElements;
  };

  if (loading) {
    return <Loading />;
  }

  const sortByName = () => {
    const sortedPokemons = pokemons.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setPokemons(sortedPokemons);
    setFilteredPokemons(sortedPokemons);
  };

  const sortByNumber = () => {
    const sortedPokemons = pokemons.sort((a, b) => a.id.localeCompare(b.id));
    setPokemons(sortedPokemons);
    setFilteredPokemons(sortedPokemons);
  };

  const filterPokemons = (text: string) => {
    if (text) {
      const filteredPokemons = pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(text.toLowerCase());
      });
      setFilteredPokemons(filteredPokemons);
    } else {
      setFilteredPokemons(pokemons);
    }
  };

  return (
    <View style={styles.container}>
      {/* -------  TITLE  -------- */}
      <View
        style={{
          // alignContent: "center",
          // flex: 1,
          flexDirection: "row",
          marginTop: 50,
          marginLeft: 10,
        }}
      >
        <Image
          style={{ marginTop: 5, tintColor: "white", width: 40, height: 40 }}
          source={require("../../../assets/Pokeball.png")}
        />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 40,
            fontWeight: "bold",
            color: "white",
          }}
        >
          PokeDex
        </Text>
      </View>
      {/* -------  HEADER  -------- */}
      <View style={styles.header}>
        <SearchBar onChange={filterPokemons}></SearchBar>
        <View>
          <SortButton
            label={sortBy === SORT_BY.CODE ? "#" : "A"}
            onClick={() => {
              setVisible(true);
            }}
          ></SortButton>
          <SortModal isOpen={visible}>
            <View
              style={{
                width: 105,
                height: 48,
                paddingTop: 16,
                paddingBottom: 16,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 16,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Sort by
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                paddingVertical: 14,
                paddingHorizontal: 4,
                borderRadius: 8,
                backgroundColor: "#FFFFFF",
              }}
            >
              <RadioForm formHorizontal={false} animation={true}>
                {radioProps.map((obj, i) => (
                  <RadioButton labelHorizontal={true} key={i}>
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={sortBy === i}
                      onPress={() => {
                        i === 1 ? sortByName() : sortByNumber();
                        setSortBy(i);
                        setVisible(false);
                      }}
                      buttonInnerColor={"#DC0A2D"}
                      buttonOuterColor={sortBy === i ? "#DC0A2D" : "#DC0A2D"}
                      buttonSize={6}
                      buttonOuterSize={18}
                      buttonStyle={{}}
                      buttonWrapStyle={{ marginLeft: 3 }}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                      onPress={() => {}}
                      labelStyle={{
                        fontSize: 14,
                        fontWeight: "400",
                        lineHeight: 16,
                        color: "#DC0A2D",
                      }}
                      labelWrapStyle={{}}
                    />
                  </RadioButton>
                ))}
              </RadioForm>
            </View>
          </SortModal>
        </View>
      </View>
      {/* -------  SCROLL VIEW  -------- */}
      <View style={styles.subContainer}>
        <ScrollView>{renderCards(filteredPokemons)}</ScrollView>
      </View>
    </View>
  );
};

export default Home;
