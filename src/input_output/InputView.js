const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('../utils/Constants');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
	readBridgeSize(callback) {
		Console.readLine(MESSAGES.bridgeSize, callback);
	},

	/**
	 * 사용자가 이동할 칸을 입력받는다.
	 */
	readMoving(callback) {},

	/**
	 * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
	 */
	readGameCommand() {},
};

module.exports = InputView;
