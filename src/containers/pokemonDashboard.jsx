import React from "react";
import PokemonDashboardComponent from "../components/pokemonDashboard";
import testPokemon from "./testPokemon";

export default function PokemonDashboard() {
	return (
		<React.Fragment>
			<PokemonDashboardComponent pokemon={testPokemon} />
		</React.Fragment>
	);
}
