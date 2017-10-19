"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_fetch_1 = require("json-fetch");
class AwesomeFetch {
    json(url, options) {
        return json_fetch_1.default(url, options);
    }
    async get(url, errorMessage, opts) {
        const request = await fetch(url, Object.assign({ credentials: 'same-origin', mode: 'no-cors' }, opts));
        if (request.status !== 200) {
            this.requestErrorHandler(errorMessage, request);
        }
        return await request.json();
    }
    requestErrorHandler(errorMessage, response) {
        alert(`${errorMessage} Url - ${response.url}. StatusText - ${response.statusText}`);
    }
}
exports.default = AwesomeFetch;
