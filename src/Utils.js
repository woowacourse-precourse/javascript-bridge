const { Random } = require('@woowacourse/mission-utils');

const Utils = Object.freeze({
	generateRandomNumber() {
		let randomNum = Random.pickNumberInList([0, 1]);
		return randomNum;
	},
});

module.exports = {
	Utils,
};