const { Random } = require('@woowacourse/mission-utils');

const generateRandomNumber = () => {
	return Random.pickNumberInRange(0, 1);
};

module.exports = generateRandomNumber;
