import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Skeleton from "./dashboardSkeleton";
import PokemonCard from "./pokemonCard";

const useStyles = makeStyles((theme) => ({
	root: {},
	details: {
		display: "flex",
		flexDirection: "column",
	},
}));

export default function PokemonDashboard(props) {
	const classes = useStyles();

	function ItemsView() {
		return (
			<Container maxWidth="sm" className={classes.root}>
				{createPokemonCards(props.pokemon)}
			</Container>
		);
	}

	return <div>{props.isLoading ? <Skeleton /> : <ItemsView />}</div>;
}

function createPokemonCards(pokemon) {
	return pokemon.map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon} />);
}
