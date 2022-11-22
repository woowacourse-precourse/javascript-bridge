const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
	read(message, callback) {
		Console.readLine('\n' + message + '\n', callback);
	},

	/**
	 * 다리의 길이를 입력받는다.
	 */
	readBridgeSize(callback) {
		this.read('다리의 길이를 입력해주세요.', callback);
	},

	/**
	 * 사용자가 이동할 칸을 입력받는다.
	 */
	readMoving(callback) {
		this.read('이동할 칸을 선택해주세요. (위: U, 아래: D)', callback);
	},

	/**
	 * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
	 */
	readGameCommand(callback) {
		this.read('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', callback);
	},
};

module.exports = InputView;
