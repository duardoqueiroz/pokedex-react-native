import { useState } from "react";
import Home from "./src/screens/Home/index";
import * as Font from "expo-font";
import PokemonDetails from "./src/screens/PokemonDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const pokemons = [
  {
    id: "#001",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    name: "Bulbasaur",
    weight: 6.9,
    height: 7,
    stats: [
      {
        value: 45,
        name: "Hp",
      },
      {
        value: 49,
        name: "Attack",
      },
      {
        value: 49,
        name: "Defense",
      },
      {
        value: 65,
        name: "Special-attack",
      },
      {
        value: 65,
        name: "Special-defense",
      },
      {
        value: 45,
        name: "Speed",
      },
    ],
    types: [
      {
        slot: 1,
        name: "Grass",
      },
      {
        slot: 2,
        name: "Poison",
      },
    ],
    moves: ["Chlorophyll", "Overgrow"],
  },
  {
    id: "#004",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    name: "Charmander",
    weight: 85,
    height: 6,
    stats: [
      {
        value: 39,
        name: "Hp",
      },
      {
        value: 52,
        name: "Attack",
      },
      {
        value: 43,
        name: "Defense",
      },
      {
        value: 60,
        name: "Special-attack",
      },
      {
        value: 50,
        name: "Special-defense",
      },
      {
        value: 65,
        name: "Speed",
      },
    ],
    types: [
      {
        slot: 1,
        name: "Fire",
      },
    ],
    moves: ["Chlorophyll", "Overgrow"],
  },
  {
    id: "#049",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
    name: "Venomoth",
    weight: 125,
    height: 15,
    stats: [
      {
        value: 70,
        name: "Hp",
      },
      {
        value: 65,
        name: "Attack",
      },
      {
        value: 60,
        name: "Defense",
      },
      {
        value: 90,
        name: "Special-attack",
      },
      {
        value: 75,
        name: "Special-defense",
      },
      {
        value: 90,
        name: "Speed",
      },
    ],
    types: [
      {
        slot: 1,
        name: "Bug",
      },
      {
        slot: 2,
        name: "Poison",
      },
    ],
    moves: ["Chlorophyll", "Overgrow"],
  },
];

export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);
  // async () => {
  //   await Font.loadAsync({
  //     Poppins: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
  //   });

  //   setFontLoaded(true);
  // };
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
