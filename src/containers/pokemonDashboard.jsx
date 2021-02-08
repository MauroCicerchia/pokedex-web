import React, { useEffect, useState } from "react";
import PokemonDashboardComponent from "../components/pokemonDashboard";
import PokeApi from "../services/apis/pokeApi";

export default function PokemonDashboard() {
	const pokeApi = new PokeApi();
	const [pokemon, setPokemon] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		pokeApi
			.fetchPage()
			.then(setPokemon)
			.then(() => setIsLoading(false));
	}, []);

	return (
		<React.Fragment>
			<PokemonDashboardComponent pokemon={pokemon} isLoading={isLoading} />
		</React.Fragment>
	);
}
