const config = {
	pokeApi: {
		url: process.env.POKE_API_URL || "https://daemon-poke-api.herokuapp.com/api",
		pageSize: parseInt(process.env.POKE_API_PAGE_SIZE || "20"),
	},
};

export default config;
