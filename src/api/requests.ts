import { API_KEY, API_URL } from './constants';
import { Welcome } from './types';

export async function getData(valueFrom: string, valueTo: string) {
	try {
		const response = await fetch(
			API_URL +
				`/data/pricemulti?fsyms=${valueFrom},${valueTo}&tsyms=${valueTo},${valueFrom}`,
			{
				method: 'GET',
				headers: {
					authorization: `Apikey ${API_KEY}`,
				},
			},
		);

		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error(error);
	}
}

export async function getCoinsList(): Promise<Welcome | undefined> {
	try {
		const response = await fetch(
			'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD',
			{
				method: 'GET',
				headers: {
					authorization: `Apikey ${API_KEY}`,
				},
			},
		);

		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error(error);
	}
}

export const placeholder = {
	ETH: {
		USDC: 2657.6,
		ETH: 1,
	},
	USDC: {
		USDC: 1,
		ETH: 0.0003763,
	},
};
