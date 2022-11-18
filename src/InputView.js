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

		InputView.inCaseWrong(bridgeGame, moving, prevCrossedBridge);

		InputView.readMoving(bridgeGame, InputView.READ_MOVING_MSG);
	},

	handlingMovingError(bridgeGame, moving) {
		try {
			Validation.validateMoving(moving);
		} catch (error) {
			MissionUtils.Console.print(error);
			InputView.readMoving(bridgeGame);
		}
	},

	inCaseWrong(bridgeGame, moving, prevCrossedBridge) {
		const isCorrect = bridgeGame.isCorrect(moving);
		if (!isCorrect) {
			InputView.readGameCommand(bridgeGame, prevCrossedBridge);
		}
	},

	readGameCommand(bridgeGame, prevCrossedBridge) {
		MissionUtils.Console.readLine(InputView.WRONG_MSG, (cmd) => {
			InputView.excuteWrongStep(bridgeGame, cmd, prevCrossedBridge);
		});
	},

	excuteWrongStep(bridgeGame, cmd, prevCrossedBridge) {
		Validation.validateCmd(cmd);
		if (cmd === 'R') {
			InputView.retryStep(bridgeGame);
		}
		if (cmd === 'Q') {
			InputView.quitStep();
		}
	},

	retryStep(bridgeGame) {
		bridgeGame.retry();
		InputView.readMoving(bridgeGame, InputView.READ_MOVING_MSG);
	},

	quitStep() {},
};

module.exports = InputView;
