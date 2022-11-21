const ERROR = {
	BRIDGE_SIZE: '[ERROR] 다리의 길이는 3 이상 20 이하의 자연수여야 합니다.',
	IS_NUMBER: '[ERROR] 다리의 길이는 자연수여야 합니다.',
	MOVING: '[ERROR] U 또는 D를 입력해주세요.',
	GAME_COMMAND: '[ERROR] R 또는 Q를 입력해주세요.',
};

const checkBridgeSize = input => {
	if (input < 3 || input > 20) {
		throw ERROR.BRIDGE_SIZE;
	}
	if (!Number.isInteger(Number(input))) {
		throw ERROR.IS_NUMBER;
	}
};

const checkMoveInput = input => {
	const reg = /^[UD]$/;
	if (!reg.test(input)) {
		throw ERROR.MOVING;
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
