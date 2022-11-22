const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('../utils/Constants');
const { checkSizeValidation, checkMovingValidation, checkCommandValidation } = require('../utils/Validation');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
	/**
	 * 다리의 길이를 입력받는다.
	 */
	readBridgeSize(callback) {
		Console.readLine(MESSAGES.bridgeSize, (size) => {
			try {
				checkSizeValidation(size);
				callback(size);
			} catch (error) {
				Console.print(error);
				this.readBridgeSize(callback);
			}
		});
	},

	/**
	 * 사용자가 이동할 칸을 입력받는다.
	 */
	readMoving(callback) {
		Console.readLine(MESSAGES.chooseMoving, (moving) => {
			try {
				checkMovingValidation(moving);
				callback(moving);
			} catch (error) {
				Console.print(error);
				this.readMoving(callback);
			}
		});
	},

	/**
	 * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
	 */
	readGameCommand(callback) {
		Console.readLine(MESSAGES.retryOrQuit, (select) => {
			try {
				checkCommandValidation(select);
				callback(select);
			} catch (error) {
				Console.print(error);
				this.readGameCommand(callback);
			}
		});
	},
};

module.exports = InputView;
