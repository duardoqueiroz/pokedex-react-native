import { View, Text } from "react-native";
import { POKEMON_STATS } from "../../shared/enums/PokemonStats";
import { IPokemonStats } from "../../shared/interfaces/IPokemon";
import styles from "./styles";

interface IPokemonStatsProps {
  stat: IPokemonStats;
  mainColor: string;
}

const PokemonStats: React.FC<IPokemonStatsProps> = ({ stat, mainColor }) => {
  const calculeStatsPercentage = (stats: number): number => {
    const maxStats = 120;
    return (stats * 100) / maxStats;
  };

  return (
    <View style={styles.baseStatsRow}>
      <View
        style={{
          ...styles.baseStatsDataLabel,
        }}
      >
        <Text style={{ color: mainColor }}>
          {
            POKEMON_STATS[
              stat.name
                .toUpperCase()
                .replace("-", "_") as keyof typeof POKEMON_STATS
            ]
          }
        </Text>
      </View>
      <View>
        <Text>{stat.value.toString().padStart(3, "0")}</Text>
      </View>
      <View style={styles.statsBar}>
        <View
          style={{
            ...styles.statsBarFill,
            backgroundColor: mainColor,
            width: `${calculeStatsPercentage(stat.value)}%`,
          }}
        ></View>
      </View>
    </View>
  );
};

export default PokemonStats;
