const { ERROR_MESSAGE, DIRECTION, LENGTH_RANGE, COMMAND } = require('./constants');
const { Console } = require('@woowacourse/mission-utils');

const validation = (input, validationFunc, retryFunc) => {
	let validatedInput;

	try {
		validatedInput = validationFunc(input);
	} catch (err) {
		Console.print(err.message);
		retryFunc();
	}

	return validatedInput;
};

const lengthInputValidation = strLength => {
	const length = parseInt(strLength);
	if (isNaN(length)) {
		throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
	}
	if (length < 3 || length > 20) {
		const { MIN, MAX } = LENGTH_RANGE;
		throw new Error(ERROR_MESSAGE.INVALID_RANGE(MIN, MAX));
	}

	return length;
};

const directionInputValidation = directionInput => {
	const direction = directionInput.replace(/\s/g, '').toUpperCase();
	const { UP, DOWN } = DIRECTION;

	if (direction !== UP && direction !== DOWN) {
		throw new Error(ERROR_MESSAGE.INVALID_INPUT_CHOICE([UP, DOWN]));
	}

	return direction;
};

const commandInputValidation = commandInput => {
	const command = commandInput.replace(/\s/g, '').toUpperCase();
	const { RESTART, QUIT } = COMMAND;

	if (command !== RESTART && command !== QUIT) {
		throw new Error(ERROR_MESSAGE.INVALID_INPUT_CHOICE([RESTART, QUIT]));
	}

	return command;
};

module.exports = {
	validation,
	lengthInputValidation,
	directionInputValidation,
	commandInputValidation,
};
