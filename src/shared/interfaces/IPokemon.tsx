export interface IPokemonStats {
  name: string;
  value: number;
}

export interface IPokemonType {
  slot: number;
  name: string;
}

export interface IPokemon {
  id: string;
  image: string;
  name: string;
  weight: number;
  height: number;
  stats: IPokemonStats[];
  types: IPokemonType[];
  moves: string[];
}
