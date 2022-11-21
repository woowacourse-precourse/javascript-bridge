const {
	SizeConstraints,
	MoveConstraints,
	CommandConstraints,
} = require('./Constraints');

class BridgeSizeValidation {
	constructor(size) {
		this.checkBridgesizeConstraints(size);
	}

	checkBridgesizeConstraints(size) {
		const sizeConstraints = new SizeConstraints(size);
		sizeConstraints.checkOnlyNumber();
		sizeConstraints.checkNumberRange();
		sizeConstraints.checkStartZero();
	}
}

class MoveInputValidation {
	constructor(moving) {
		this.checkMoveInput(moving);
	}

	checkMoveInput(moving) {
		const moveConstraints = new MoveConstraints(moving);
		moveConstraints.checkInputUorD();
	}
}

class CommandInputValidation {
	constructor(command) {
		this.checkCommandInput(command);
	}

	checkCommandInput(command) {
		const commandConstraints = new CommandConstraints(command);
		commandConstraints.checkInputRorQ();
	}
}

module.exports = {
	BridgeSizeValidation,
	MoveInputValidation,
	CommandInputValidation,
};
