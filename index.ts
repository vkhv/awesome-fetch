import {IAwesomeFetch, FetchOptions, JsonFetchResponse} from './index.d'
import jsonFetch  from 'json-fetch';

export default class AwesomeFetch implements IAwesomeFetch {
	 json(url: string, options: FetchOptions): Promise<JsonFetchResponse> {
		return jsonFetch(url, options);
	}

	 async get<T>(url: string, errorMessage: string, opts?: RequestInit): Promise<T> {
		const request: Response = await fetch(url, {credentials: 'same-origin', mode: 'no-cors', ...opts});

		if (request.status !== 200) {
			this.requestErrorHandler(errorMessage,  request);
		}

		return await request.json();
	}

	requestErrorHandler(errorMessage: string, response: Response): void {
		alert(`${errorMessage} Url - ${response.url}. StatusText - ${response.statusText}`);
	}

}
