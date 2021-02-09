import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import Paper from "@material-ui/core/Paper";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Navbar from "./containers/navbar";
import PokemonDashboard from "./containers/pokemonDashboard";
const cookies = new Cookies();

function App() {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [darkMode, setDarkMode] = useState(themeCookie() === "dark" || false);

	const theme = createMuiTheme({
		palette: {
			type: darkMode ? "dark" : "light",
		},
	});

	function toggleDarkMode() {
		setDarkMode(!darkMode);
		cookies.set("manual-theme", !darkMode ? "dark" : "light");
	}

	useEffect(() => {
		if (!themeCookie()) setDarkMode(prefersDarkMode);
	}, [prefersDarkMode]);

	return (
		<ThemeProvider theme={theme}>
			<Paper variant="outlined" square>
				<Navbar darkMode={darkMode} onDarkModeToggle={toggleDarkMode} />
				<PokemonDashboard />
			</Paper>
		</ThemeProvider>
	);
}

function themeCookie() {
	return cookies.get("manual-theme");
}

export default App;
