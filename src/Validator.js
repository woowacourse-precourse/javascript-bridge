const ErrorMessage = require('./constants/ErrorMessage');

class Validator {
	static isNumber(value) {
		if (isNaN(value)) throw new Error(ErrorMessage.NOT_NUMBER);
	}
	static isInValidRange(number) {
		if (!(3 <= number && number <= 25)) throw new Error(ErrorMessage.NOT_IN_VALID_RANGE);
	}
	static isValidMove(move) {
		if (!(move === 'U' || move === 'D')) throw new Error(ErrorMessage.NOT_VALID_MOVE);
	}
	static isValidCommand(command) {
		if (!(command === 'R' || command === 'Q')) throw new Error(ErrorMessage.NOT_VALID_COMMAND);
	}
}

module.exports = Validator;
