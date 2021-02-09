import _ from "lodash";
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import typesColor from "./typesColor";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "left",
		alignItems: "center",
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	details: {
		display: "flex",
		flexDirection: "column",
	},
	content: {
		flex: "1 0 auto",
		flexGrow: 1,
	},
	sprite: {
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		width: "6rem",
		height: "6rem",
		border: "0.2rem solid",
		borderColor: "red",
		borderRadius: "50%",
	},
	types: {
		display: "flex",
		alignItems: "center",
		paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    type: {
        marginLeft: theme.spacing(0.5),
		marginRight: theme.spacing(0.5),
        color: "#FCFCFA",
        [theme.breakpoints.down('sm')]: {
			height: "1.7rem",
			width: "4rem",
			fontSize: "0.7rem"
		},
		[theme.breakpoints.up('md')]: {
			height: "2rem",
			width: "5rem"
		},
    },
    ...typesColor
}));

export default function PokemonCard(props) {
	const classes = useStyles();

	return (
		<Card elevation={3} className={classes.root}>
			<Avatar alt={props.name} src={props.sprite} className={classes.sprite} />
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography variant="subtitle1" color="textSecondary">
						#{props.id}
					</Typography>
					<Typography component="h5" variant="h5">
						{_.capitalize(props.name)}
					</Typography>
				</CardContent>
				<div className={classes.types}>
					{createCardChips(props.types, classes)}
				</div>
			</div>
		</Card>
	);
}

function createCardChips(types, classes) {
    return types.map((type) => (
        <Chip key={type} label={_.capitalize(type)} className={`${classes.type} ${classes[type]}`} />
    ))
}