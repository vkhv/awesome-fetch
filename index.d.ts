export type FetchOptions = {
	body: {[key: string]: any};
	credentials?: string;
	expectedStatuses?: number[];
	method: string;
};

export interface JsonFetchResponse {
	status: number;
	statusText: string;
	headers: Headers;
	text: string;
	body: any;
 }

export interface IAwesomeFetch {
	json(url: string, options: FetchOptions): Promise<JsonFetchResponse>
	get<T>(url: string, errorMessage: string, opts?: RequestInit): Promise<T>
}
