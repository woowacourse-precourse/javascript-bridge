const ErrorMessage = require('./constants/ErrorMessage');
const MoveCommand = require('./constants/MoveCommand');
const RetryCommand = require('./constants/RetryCommand');

class Validator {
	static isNumber(value) {
		if (isNaN(value)) throw new Error(ErrorMessage.NOT_NUMBER);
	}

	static isInValidRange(number) {
		if (!(3 <= number && number <= 25)) throw new Error(ErrorMessage.NOT_IN_VALID_RANGE);
	}

	static isValidMove(move) {
		if (!(move === MoveCommand.UP || move === MoveCommand.DOWN))
			throw new Error(ErrorMessage.NOT_VALID_MOVE);
	}

	static isValidCommand(command) {
		if (!(command === RetryCommand.RETRY || command === RetryCommand.QUIT))
			throw new Error(ErrorMessage.NOT_VALID_COMMAND);
	}
}

module.exports = Validator;
