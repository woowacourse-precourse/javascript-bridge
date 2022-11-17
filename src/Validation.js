const Validation = {
	BRIDGE_SIZE_ERROR_MSG: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
	MOVING_ERROR_MSG: '[ERROR] 이동할 칸은 대문자 D 또는 대문자 U 입니다.',

	validateBridgeSize(bridgeSize) {
		const isNumber = !Number.isNaN(bridgeSize);
		const isValidRange = 2 < bridgeSize && bridgeSize < 21;
		const isValid = isNumber && isValidRange;

		if (!isValid) {
			throw new Error(Validation.BRIDGE_SIZE_ERROR_MSG);
		}
	},

	validateMoving(moving) {
		const isValid = moving === 'D' || moving === 'U';
		if (!isValid) {
			throw new Error(Validation.MOVING_ERROR_MSG);
		}
	},
};

module.exports = Validation;
