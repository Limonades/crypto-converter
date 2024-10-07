import { DivideValue } from './types';

export const divide = (
	firstValue: DivideValue,
	secondValue: DivideValue,
): number | null => {
	if (firstValue === '' || secondValue === '') {
		return null;
	}

	const first = Number(firstValue);
	const second = Number(secondValue);

	if (isNaN(first) || isNaN(second)) {
		return null;
	}

	return first / second;
};
