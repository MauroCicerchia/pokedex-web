import _ from "lodash";
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Skeleton from "@material-ui/lab/Skeleton";
import config from "../../config/client";
const {
	pokeApi: { pageSize },
} = config;

const useStyles = makeStyles((theme) => ({
	card: {
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
	},
	types: {
		display: "flex",
		alignItems: "center",
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(2),
		marginBottom: theme.spacing(1),
		marginLeft: theme.spacing(1),
	},
	id: {
		[theme.breakpoints.down('sm')]: {
			width: "3rem"
		},
		[theme.breakpoints.up('md')]: {
			width: "5rem"
		}
	},
	name: {
		[theme.breakpoints.down('sm')]: {
			width: "8rem"
		},
		[theme.breakpoints.up('md')]: {
			width: "16rem"
		}
	},
	type: {
		[theme.breakpoints.down('sm')]: {
			width: "5rem",
			height: "2rem"
		},
		[theme.breakpoints.up('md')]: {
			width: "8rem",
			height: "3rem"
		}
	}
}));

export default function DashboardSkeleton() {
	const classes = useStyles();

	function SkeletonCard() {
		return (
			<Card elevation={3} className={classes.card}>
				<Skeleton variant="circle" className={classes.sprite} animation="wave" />
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Skeleton animation="wave" className={classes.id} />
						<Skeleton animation="wave" className={classes.name}/>
					</CardContent>
					<div className={classes.types}>
						<Skeleton animation="wave" className={classes.type}/>
					</div>
				</div>
			</Card>
		);
	}

	return (
		<Container maxWidth="sm" className={classes.root}>
			{_.times(pageSize, Number).map((key) => (
				<SkeletonCard key={key} />
			))}
		</Container>
	);
}
