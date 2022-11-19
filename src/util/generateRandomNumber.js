const { Random } = require('@woowacourse/mission-utils');
const { BRIDGE } = require('../constant/Constant');

const generateRandomNumber = () => {
	return Random.pickNumberInRange(0, 1);
};

module.exports = generateRandomNumber;
