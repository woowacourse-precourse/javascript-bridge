const { Console } = require('@woowacourse/mission-utils');
const { printError } = require('./OutputView');

const INPUT = {
	BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
	MOVING: '이동할 칸을 입력해주세요. (위: U, 아래: D)\n',
	GAME_COMMAND:
		'게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
	getInputs(callbackArr) {
		InputView.readBridgeSize.bind(this)(callbackArr);
	},

	/**
	 * 다리의 길이를 입력받는다.
	 */
	readBridgeSize(callbackArr) {
		const [bridgeSize, moving, gameCommand] = callbackArr;
		Console.readLine(INPUT.BRIDGE_SIZE, input => {
			try {
				bridgeSize.call(this, input);
				InputView.readMoving.call(this, [moving, gameCommand]);
			} catch (err) {
				printError(err);
				InputView.readBridgeSize.bind(this)(callbackArr);
			}
		});
	},

	/**
	 * 사용자가 이동할 칸을 입력받는다.
	 */
	readMoving(callbackArr) {
		const [moving, gameCommand] = callbackArr;
		Console.readLine(INPUT.MOVING, input => {
			try {
				const [MOVEABLE, IS_END] = moving.call(this, input);
				if (MOVEABLE && !IS_END) InputView.readMoving.call(this, callbackArr);
				if (!MOVEABLE) InputView.readGameCommand.call(this, gameCommand);
			} catch (err) {
				printError(err);
				InputView.readMoving.bind(this)(callbackArr);
			}
		});
	},

	/**
	 * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
	 */
	readGameCommand(callbackArr) {
		Console.readLine(INPUT.GAME_COMMAND, input => {
			try {
				callbackArr.call(this, input);
			} catch (err) {
				printError(err);
				InputView.readGameCommand.bind(this)(callbackArr);
			}
		});
	},

	closeConsole() {
		Console.close();
	},
};

module.exports = InputView;
