const MissionUtils = require('@woowacourse/mission-utils');
const Validation = require('./Validation');
const OutputView = require('./OutputView');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

const BridgeGame = require('./BridgeGame');

const InputView = {
	START_MSG: '다리 건너기 게임을 시작합니다.\n',
	READ_BRIDGE_SIZE_MSG: '다리의 길이를 입력해주세요.\n',
	READ_MOVING_MSG: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
	WRONG_MSG: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
	RETRY: 'R',
	QUIT: 'Q',
	RETRY_COUNT: 1,

	readBridgeSize(START_MSG = '', READ_BRIDGE_SIZE_MSG = '') {
		MissionUtils.Console.readLine(
			START_MSG + READ_BRIDGE_SIZE_MSG,
			(bridgeSize) => {
				InputView.excuteBridgeSizeStep(bridgeSize);
			},
		);
	},

	excuteBridgeSizeStep(bridgeSize) {
		InputView.handlingBridgeSizeError(bridgeSize);
		const bridgeGame = new BridgeGame(
			bridgeSize,
			BridgeRandomNumberGenerator.generate,
		);
		InputView.readMoving(bridgeGame, InputView.READ_MOVING_MSG);
	},

	handlingBridgeSizeError(bridgeSize) {
		try {
			Validation.validateBridgeSize(bridgeSize);
		} catch (error) {
			MissionUtils.Console.print(error);
			InputView.readBridgeSize();
		}
	},

	readMoving(bridgeGame, READ_MOVING_MSG = '') {
		MissionUtils.Console.readLine(READ_MOVING_MSG, (moving) => {
			InputView.excuteMovingStep(bridgeGame, moving);
		});
	},

	excuteMovingStep(bridgeGame, moving) {
		InputView.handlingMovingError(bridgeGame, moving);
		bridgeGame.move(moving);
		const prevCrossedBridge = bridgeGame.getPrevCrossedBridge();
		OutputView.printMap(prevCrossedBridge);

		InputView.inCaseCorrectOrWrong(bridgeGame, prevCrossedBridge);
	},

	handlingMovingError(bridgeGame, moving) {
		try {
			Validation.validateMoving(moving);
		} catch (error) {
			MissionUtils.Console.print(error);
			InputView.readMoving(bridgeGame);
		}
	},

	inCaseCorrectOrWrong(bridgeGame, prevCrossedBridge) {
		const wasCorrect = bridgeGame.wasCorrect();
		const isEnd = bridgeGame.isEnd();
		if (!wasCorrect) {
			InputView.readGameCommand(bridgeGame, prevCrossedBridge);
		}
		if (wasCorrect && isEnd) {
			InputView.quitStep(bridgeGame, prevCrossedBridge);
			return;
		}
		InputView.readMoving(bridgeGame, InputView.READ_MOVING_MSG);
	},

	readGameCommand(bridgeGame, prevCrossedBridge) {
		MissionUtils.Console.readLine(InputView.WRONG_MSG, (cmd) => {
			InputView.excuteWrongStep(bridgeGame, cmd, prevCrossedBridge);
		});
	},

	excuteWrongStep(bridgeGame, cmd, prevCrossedBridge) {
		InputView.handlingCommandError(bridgeGame, cmd, prevCrossedBridge);
		if (cmd === InputView.RETRY) {
			InputView.retryStep(bridgeGame);
		}
		if (cmd === InputView.QUIT) {
			InputView.quitStep(bridgeGame, prevCrossedBridge);
		}
	},

	handlingCommandError(bridgeGame, cmd, prevCrossedBridge) {
		try {
			Validation.validateCmd(cmd);
		} catch (error) {
			MissionUtils.Console.print(error);
			InputView.readGameCommand(bridgeGame, prevCrossedBridge);
		}
	},

	retryStep(bridgeGame) {
		bridgeGame.retry();
		InputView.RETRY_COUNT++;
		InputView.readMoving(bridgeGame, InputView.READ_MOVING_MSG);
	},

	quitStep(bridgeGame, prevCrossedBridge) {
		OutputView.printResult(
			bridgeGame,
			prevCrossedBridge,
			InputView.RETRY_COUNT,
		);
		MissionUtils.Console.close();
	},
};

module.exports = InputView;
