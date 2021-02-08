import _ from "lodash";
import request from "request-promise";

class BaseApi {
	constructor(baseUrl) {
		_.assign(this, { baseUrl });
	}

	get(path, qs, headers) {
		return this._doRequest("GET", path, qs, null, headers);
	}

	post(path, qs, body, headers) {
		return this._doRequest("POST", path, qs, body, headers);
	}

	put(path, qs, body, headers) {
		return this._doRequest("PUT", path, qs, body, headers);
	}

	delete(path, qs, headers) {
		return this._doRequest("DELETE", path, qs, null, headers);
	}

	_doRequest(method, path, qs = {}, body, headers) {
		return request({
			method,
			uri: this.baseUrl + path,
			qs,
			body,
			headers,
			json: true,
		}).promise();
	}
}

export default BaseApi;
