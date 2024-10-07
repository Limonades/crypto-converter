import React, { ChangeEvent, useEffect, useState } from 'react';
import { NAME_RESP } from '@/api/constants';
import { Datum } from '@/api/types';
import { divide } from '@/utils/divide';
import { getCoinsList, getData, placeholder } from '@/api/requests';

import styles from './App.module.css';
import { detectDevMode } from '@/utils/detectDevMode';
import { ETH, USDC } from '@/constants/currencies';

function App() {
	const [currencyData, setCurrencyData] = useState(placeholder);
	const [fromInput, setFromInput] = useState('');
	const [fromCurrency, setFromCurrency] = useState(ETH);
	const [toCurrency, setToCurrency] = useState(USDC);
	const [toInput, setToInput] = useState('');
	const [coinList, setCoinList] = useState<Datum[]>([]);

	console.log('');

	const isDevMode = detectDevMode();

	useEffect(() => {
		if (!isDevMode) {
			setTimeout(() => {
				if (NAME_RESP.Data?.length) {
					setCoinList(NAME_RESP.Data);
				}
			}, 1500);
		} else {
			getCoinsList().then((response) => {
				if (response?.Data) {
					setCoinList(response.Data);
				}
			});
		}
	}, []);

	const handleChangeFrom = (event: ChangeEvent<HTMLInputElement>) => {
		// TODO ts
		console.log(toCurrency);
		console.log(fromCurrency);
		/* eslint-disable */
		// @ts-ignore
		const rateValue = currencyData[toCurrency][fromCurrency];
		const { value } = event.target;

		// console.log('rateValue', rateValue)
		// console.log('currencyData', currencyData);

		console.log('value', typeof value);

		setFromInput(value);

		const divideResult = divide(value, rateValue);

		console.log('divideResult', divideResult);

		if (divideResult !== null) {
			let formattedResult = `${divideResult}`;

			if (!Number.isInteger(divideResult)) {
				formattedResult = divideResult.toFixed(4);
			}

			setToInput(formattedResult);
		} else {
			setToInput('');
		}

		console.log('dsa');
	};

	const handleChangeTo = (event: ChangeEvent<HTMLInputElement>) => {
		// TODO ts
		console.log(fromCurrency);
		console.log(toCurrency);
		/* eslint-disable */
		// @ts-ignore
		const rateValue = currencyData[fromCurrency][toCurrency];
		const { value } = event.target;

		// console.log('rateValue', rateValue)
		// console.log('currencyData', currencyData);

		setToInput(value);

		const divideResult = divide(value, rateValue);

		console.log('divideResult', divideResult);

		console.log('divideResult', divideResult);

		if (divideResult !== null) {
			let formattedResult = `${divideResult}`;

			if (!Number.isInteger(divideResult)) {
				formattedResult = divideResult.toFixed(4);
			}

			setFromInput(formattedResult);
		} else {
			setFromInput('');
		}
	};

	const handleSelectFrom = async (event: ChangeEvent<HTMLSelectElement>) => {
		console.log(event.target.value);
		setFromCurrency(event.target.value);

		const data = await getData(event.target.value, toCurrency);

		setCurrencyData(data);
	};

	const handleSelectTo = async (event: ChangeEvent<HTMLSelectElement>) => {
		setToCurrency(event.target.value);

		const data = await getData(fromCurrency, event.target.value);

		setCurrencyData(data);
	};

	return (
		<div className={styles.container}>
			{isDevMode && (
				<div style={{ marginBottom: '24px' }}>
					{/*TODO round options*/}
					{/*<select*/}
					{/*	name=''*/}
					{/*	id=''*/}
					{/*>*/}
					{/*	<option value='2'>2</option>*/}
					{/*	<option value='4'>4</option>*/}
					{/*	<option value='100'>Original</option>*/}
					{/*	<option value=''>Integer</option>*/}
					{/*</select>*/}
				</div>
			)}

			<div>
				<select
					name=''
					id=''
					value={fromCurrency}
					onChange={handleSelectFrom}
					className={styles.dsa}
				>
					{coinList.length ? (
						coinList.map((coin) => {
							return (
								<option
									key={coin.CoinInfo?.Id}
									disabled={toCurrency === coin.CoinInfo?.Name}
									value={coin.CoinInfo?.Name}
								>
									{coin.CoinInfo?.Name + ' - ' + coin.CoinInfo?.FullName}
								</option>
							);
						})
					) : (
						<option>Loading...</option>
					)}
				</select>
				<input
					type='number'
					name='ETH'
					placeholder='ETH'
					value={fromInput}
					onChange={handleChangeFrom}
				/>
			</div>

			<div>
				<select
					name=''
					id=''
					value={toCurrency}
					onChange={handleSelectTo}
				>
					{coinList.length ? (
						coinList.map((coin) => {
							return (
								<option
									key={coin.CoinInfo?.Id}
									disabled={fromCurrency === coin.CoinInfo?.Name}
									value={coin.CoinInfo?.Name}
								>
									{coin.CoinInfo?.Name + ' - ' + coin.CoinInfo?.FullName}
								</option>
							);
						})
					) : (
						<option>Loading...</option>
					)}
				</select>

				<input
					type='number'
					name='USDT'
					placeholder='USDT'
					value={toInput}
					onChange={handleChangeTo}
				/>
			</div>
		</div>
	);
}

export default App;
