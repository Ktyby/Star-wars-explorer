const convertNumberInToString = (value, fixed = 0) => {
	if (!value) return value;
	if (Number.isNaN(value)) return value;

	const number = +value;

	const fixedPos = !fixed || fixed < 0 ? 0 : fixed;

	const procisionNumber = number.toPrecision(2).split('e');
	const suffix =
		procisionNumber.length === 1 ? 0 : Math.floor(Math.min(procisionNumber[1].slice(1), 14) / 3);
	const hundreds =
		suffix < 1 ? number.toFixed(0 + fixedPos) : (number / 10 ** (suffix * 3)).toFixed(1 + fixedPos);
	const hundredsWithoutFractions = hundreds < 0 ? hundreds : Math.abs(hundreds);
	const summaryValue = hundredsWithoutFractions + ['', 'K', 'M', 'B', 'T'][suffix];

	return summaryValue;
};

export default convertNumberInToString;
