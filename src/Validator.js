const MissionUtils = require('@woowacourse/mission-utils');
const numRegex = /[^0-9]/;

const Validator = {
	isNum(size) {
		if (numRegex.test(size)) {
			MissionUtils.Console.close();
			throw new Error('[ERROR] 다리 길이는 숫자여야 합니다.');
		}
	},
	
	isOne(size) {
		if (size.length() !== 1) {
			MissionUtils.Console.close();
			throw new Error('[ERROR] 다리 길이는 하나의 숫자여야 합니다.');
		}
	},

	checkBridgeSize(size) {
		this.#isNum(size);
		this.#isOne(size);
	},
}

module.exports = Validator;