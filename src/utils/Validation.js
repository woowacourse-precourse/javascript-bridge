const { ERROR_MESSAGES, MOVING, SELECT, BRIDGE_SIZE, REGEXP } = require('./Constants');

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

const checkCommandValidation = (select) => {
	if (![SELECT.retry, SELECT.quit].includes(select)) {
		throw new Error(ERROR_MESSAGES.retryOrQuit);
	}
};

module.exports = {
	checkSizeValidation,
	checkMovingValidation,
	checkCommandValidation,
};
