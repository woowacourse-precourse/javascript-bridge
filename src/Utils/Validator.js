const { Console } = require('@woowacourse/mission-utils');
const { ERROR_MSG } = require('./constants');
const numRegex = /[^0-9]/;

const Validator = {
	isNum(size) {
		if (numRegex.test(size)) {
			throw (ERROR_MSG.BRIDGE_SIZE_NUM);
		}
	},	
	
	isInRange(size) {
		if (size < 3 || size > 20) {
			throw (ERROR_MSG.BRIDGE_SIZE_RANGE);
		}
	},

	checkBridgeSize(size) {
		this.isNum(size);
		this.isInRange(size);
	},

	checkMoving(move) {
		if (move !== 'U' && move !== 'D') {
			throw (ERROR_MSG.MOVING);
		}
	},

	checkGameCommand(command) {
		if (command !== 'R' && command !== 'Q') {
			throw (ERROR_MSG.ENDING);
		}
	}
}

module.exports = Validator;