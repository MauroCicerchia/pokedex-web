import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PokemonCard from "./pokemonCard";

const useStyles = makeStyles((theme) => ({
	root: {},
}));

export default function PokemonDashboard(props) {
	const classes = useStyles();

	return (
		<Container maxWidth="sm" className={classes.root}>
			{createPokemonCards(props.pokemon)}
		</Container>
	);
}

function createPokemonCards(pokemon) {
	return pokemon.map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon} />);
}
