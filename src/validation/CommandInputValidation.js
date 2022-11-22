const CommandConstraints = require('../constraints/CommandConstraints');

class CommandInputValidation {
	constructor(command) {
		this.checkCommandInput(command);
	}

	checkCommandInput(command) {
		const commandConstraints = new CommandConstraints(command);
		commandConstraints.checkInputRorQ();
	}
}

module.exports = CommandInputValidation;
