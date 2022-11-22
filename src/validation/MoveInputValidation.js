const { MoveConstraints } = require('../Constraints');

class MoveInputValidation {
	constructor(moving) {
		this.checkMoveInput(moving);
	}

	checkMoveInput(moving) {
		const moveConstraints = new MoveConstraints(moving);
		moveConstraints.checkInputUorD();
	}
}

module.exports = MoveInputValidation;
