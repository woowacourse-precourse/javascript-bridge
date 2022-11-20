const ERROR = {
	BRIDGE_SIZE: '다리의 길이는 3 이상 20 이하의 자연수여야 합니다.',
	MOVING: 'U 또는 D를 입력해주세요.',
	GAME_COMMAND: 'R 또는 Q를 입력해주세요.',
};

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
