import React from 'react';
import { getData } from '@/api/requests';

type RequestButtonProps = {
	from: string;
	to: string;
	setData: () => void;
};

export const RequestButton = ({
	from,
	to,
	setData,
}: RequestButtonProps): JSX.Element => {
	// const handleCLick = async () => {
	// 	console.log(fromInput);
	// 	console.log(toInput);
	// 	const a = await getData(fromCurrency, toCurrency);
	//
	// 	console.log(a);
	//
	// 	setData(a);
	//
	// 	console.log('');
	// };

	return (
		<button
			type='button'
			// onClick={handleCLick}
		>
			request
		</button>
	);
};

export default RequestButton;
