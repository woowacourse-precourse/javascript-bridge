const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");

const InputView = {
	START_MSG: "다리 건너기 게임을 시작합니다.\n",
	READ_BRIDGE_SIZE_MSG: "다리의 길이를 입력해주세요.\n",
	READ_MOVING_MSG: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",

	readBridgeSize(START_MSG = "", READ_BRIDGE_SIZE_MSG = "") {
		MissionUtils.Console.readLine(
			START_MSG + READ_BRIDGE_SIZE_MSG,
			(bridgeSize) => {
				InputView.handlingBridgeSizeError(bridgeSize);
				const bridgeGame = new BridgeGame(bridgeSize);
				InputView.readMoving(bridgeGame, InputView.READ_MOVING_MSG);
			},
		);
	},

	handlingBridgeSizeError(bridgeSize) {
		try {
			Validation.validateBridgeSize(bridgeSize);
		} catch (error) {
			MissionUtils.Console.print(error);
			InputView.readBridgeSize();
		}
	},

	readMoving(bridgeGame, READ_MOVING_MSG = "") {
		MissionUtils.Console.readLine(READ_MOVING_MSG, (moving) => {
			InputView.handlingMovingError(bridgeGame, moving);
			bridgeGame.move();
		});
	},

	handlingMovingError(bridgeGame, moving) {
		try {
			Validation.validateMoving(moving);
		} catch (error) {
			MissionUtils.Console.print(error);
			InputView.readMoving(bridgeGame);
		}
	},

	readGameCommand() {},
};

module.exports = InputView;
