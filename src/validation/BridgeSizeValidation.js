const { SizeConstraints } = require('../Constraints');

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

module.exports = BridgeSizeValidation;
