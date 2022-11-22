const { Console } = require('@woowacourse/mission-utils');
const { GAME_GUIDE_MESSAGES } = require('../utils/constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
	/**
	 * 다리의 길이를 입력받는다.
	 */
	readBridgeSize(createBridgeController) {
		Console.readLine(GAME_GUIDE_MESSAGES.LENGTH_INPUT, sizeInput => {
			createBridgeController(sizeInput);
		});
	},
	/**
	 * 사용자가 이동할 칸을 입력받는다.
	 */
	readMoving(moveController) {
		Console.readLine(GAME_GUIDE_MESSAGES.MOVE_INPUT, directionInput => {
			moveController(directionInput);
		});
	},

	/**
	 * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
	 */
	readGameCommand(commandController) {
		Console.readLine(GAME_GUIDE_MESSAGES.COMMAND_INPUT, commandInput => {
			commandController(commandInput);
		});
	},
};

module.exports = InputView;
