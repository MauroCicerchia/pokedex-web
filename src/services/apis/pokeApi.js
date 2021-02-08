import BaseApi from "./baseApi";
import config from "../../config/client";
const {
	pokeApi: { url, pageSize },
} = config;

class PokeApi extends BaseApi {
	constructor() {
		super(url);
	}

	fetchPage(page = 0) {
		return this.get("/pokemon", { offset: page * pageSize, limit: pageSize }).get(
			"results"
		);
	}
}

export default PokeApi;
