const { ERROR_MESSAGES, MOVING, BRIDGE_SIZE, REGEXP } = require('./Constants');

const checkSizeValidation = (size) => {
	if (!size.match(REGEXP.number)) {
		throw new Error(ERROR_MESSAGES.notNumber);
	}
	if (!(size >= BRIDGE_SIZE.minimum && size <= BRIDGE_SIZE.maximum)) {
		throw new Error(ERROR_MESSAGES.bridgeSize);
	}
};

const checkMovingValidation = (moving) => {
	if (![MOVING.up, MOVING.down].includes(moving)) {
		throw new Error(ERROR_MESSAGES.chooseMoving);
	}
};

module.exports = {
	checkSizeValidation,
	checkMovingValidation,
};
