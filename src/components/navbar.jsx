import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Switch from "@material-ui/core/Switch";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import logo from "../img/logo.png";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	darkModeSwitch: {
		marginRight: theme.spacing(2),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	logo: {
		height: "auto",
		width: "7rem",
		marginRight: theme.spacing(2),
	},
	section: {
		marginLeft: "auto",
		display: "flex",
	},
	darkModeContainer: {
		display:  "flex",
		alignItems: "center",
		marginRight: theme.spacing(1),
	},
}));

export default function Navbar(props) {
	const classes = useStyles();

	return (
		<HideOnScroll>
			<AppBar position="sticky" color="default" className={classes.root}>
				<Toolbar>
					<img src={logo} alt="logo" className={classes.logo} />
					<div className={classes.section}>
						<DarkModeSwitch {...props} />
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="secondary"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	);
}

function DarkModeSwitch(props) {
	const classes = useStyles();
	return (
		<div className={classes.darkModeContainer}>
			<Brightness6Icon color={props.darkMode ? "secondary" : "default"} fontSize="small" />
			<Switch
				checked={props.darkMode}
				onChange={props.onDarkModeToggle}
				name="toggleDarkMode"
				className={classes.darkModeSwitch}
			/>
		</div>
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
