const { ERROR } = require('../constant/Constant');

const checkBridgeSize = input => {
	const reg = /^[3-9]|[1-9][0-9]|20$/;
	if (!reg.test(input)) {
		throw ERROR.BRIDGE_SIZE;
	}
};

const checkMoveInput = input => {
	const reg = /^[UD]$/;
	if (!reg.test(input)) {
		throw ERROR.MOVE_INPUT;
	}
};

const checkGameCommand = input => {
	const reg = /^[RQ]$/;
	if (!reg.test(input)) {
		throw ERROR.GAME_COMMAND;
	}
};

module.exports = {
	checkBridgeSize,
	checkMoveInput,
	checkGameCommand,
};
