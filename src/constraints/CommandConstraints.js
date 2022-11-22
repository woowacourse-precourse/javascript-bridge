const { COMMAND, ERROR } = require('../constant/Constants');

class CommandConstraints {
	#command;

	constructor(command) {
		this.#command = command;
	}

	checkInputRorQ() {
		if (
			this.#command !== COMMAND.RETRY_STRING &&
			this.#command !== COMMAND.END_GAME_STRING
		) {
			throw ERROR.ERROR_NOT_ONLY_R_OR_Q;
		}
	}
}

module.exports = CommandConstraints;
