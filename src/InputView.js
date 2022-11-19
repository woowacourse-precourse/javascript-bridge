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
				InputView.handlingBridgeSizeError(bridgeSize);
			},
		);
	},

	handlingBridgeSizeError(bridgeSize) {
		try {
			Validation.validateBridgeSize(bridgeSize);
			InputView.excuteBridgeSizeStep(bridgeSize);
		} catch (error) {
			MissionUtils.Console.print(error);
			InputView.readBridgeSize();
		}
	},

	excuteBridgeSizeStep(bridgeSize) {
		const bridgeGame = new BridgeGame(
			bridgeSize,
			BridgeRandomNumberGenerator.generate,
		);
		InputView.readMoving(bridgeGame, InputView.READ_MOVING_MSG);
	},

	readMoving(bridgeGame, READ_MOVING_MSG = '') {
		MissionUtils.Console.readLine(READ_MOVING_MSG, (moving) => {
			InputView.handlingMovingError(bridgeGame, moving);
		});
	},

	handlingMovingError(bridgeGame, moving) {
		try {
			Validation.validateMoving(moving);
			InputView.excuteMovingStep(bridgeGame, moving);
		} catch (error) {
			MissionUtils.Console.print(error);
			InputView.readMoving(bridgeGame);
		}
	},

	excuteMovingStep(bridgeGame, moving) {
		bridgeGame.move(moving);
		const prevCrossedBridge = bridgeGame.getPrevCrossedBridge();
		OutputView.printMap(prevCrossedBridge);

		InputView.inCaseWrongOrEnd(bridgeGame, prevCrossedBridge);
	},

	inCaseWrongOrEnd(bridgeGame, prevCrossedBridge) {
		if (!bridgeGame.wasCorrect()) {
			InputView.readGameCommand(
				bridgeGame,
				prevCrossedBridge,
				InputView.WRONG_MSG,
			);
		}
		if (bridgeGame.wasCorrect() && bridgeGame.isEnd()) {
			InputView.quitStep(bridgeGame, prevCrossedBridge);
			return;
		}
		InputView.readMoving(bridgeGame, InputView.READ_MOVING_MSG);
	},

	readGameCommand(bridgeGame, prevCrossedBridge, WRONG_MSG = '') {
		MissionUtils.Console.readLine(WRONG_MSG, (cmd) => {
			InputView.handlingCommandError(bridgeGame, cmd, prevCrossedBridge);
		});
	},

	handlingCommandError(bridgeGame, cmd, prevCrossedBridge) {
		try {
			Validation.validateCmd(cmd);
			InputView.excuteWrongStep(bridgeGame, cmd, prevCrossedBridge);
		} catch (error) {
			MissionUtils.Console.print(error);
			InputView.readGameCommand(bridgeGame, prevCrossedBridge);
		}
	},

	excuteWrongStep(bridgeGame, cmd, prevCrossedBridge) {
		if (cmd === InputView.RETRY) {
			InputView.retryStep(bridgeGame);
		}
		if (cmd === InputView.QUIT) {
			InputView.quitStep(bridgeGame, prevCrossedBridge);
		}
	},

	retryStep(bridgeGame) {
		bridgeGame.retry();
		InputView.RETRY_COUNT += 1;
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
