import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import logo from "../img/logo.png";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: "auto",
	},
	logo: {
		height: "auto",
		width: "7rem",
		marginRight: theme.spacing(2),
	},
}));

export default function Navbar() {
	const classes = useStyles();

	return (
		<HideOnScroll>
			<AppBar position="sticky" color="default">
				<Toolbar>
					<img src={logo} alt="logo" className={classes.logo} />
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="secondary"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	);
}

function HideOnScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({ threshold: 100 });

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}
