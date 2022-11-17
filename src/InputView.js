const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

const InputView = {
	bridge: [],
	START_MSG: "다리 건너기 게임을 시작합니다.",
	READ_BRIDGE_SIZE_MSG: "다리의 길이를 입력해주세요.",
	READ_MOVING_MSG: "이동할 칸을 선택해주세요. (위: U, 아래: D)",

	readBridgeSize() {
		MissionUtils.Console.readLine(
			InputView.START_MSG + "\n" + InputView.READ_BRIDGE_SIZE_MSG + "\n",
			(bridgeSize) => {
				InputView.executeBridgeSizeStep(bridgeSize);
			},
		);
	},

	executeBridgeSizeStep(bridgeSize) {
		InputView.handlingBridgeSizeError(bridgeSize);
		InputView.bridge = BridgeMaker.makeBridge(
			bridgeSize,
			BridgeRandomNumberGenerator.generate,
		);
		InputView.readMoving();
	},

	handlingBridgeSizeError(bridgeSize) {
		try {
			Validation.validateBridgeSize(bridgeSize);
		} catch (error) {
			MissionUtils.Console.print(error);
			MissionUtils.Console.readLine("", (bridgeSize) => {
				InputView.executeBridgeSizeStep(bridgeSize);
			});
		}
	},

	readMoving() {
		MissionUtils.Console.readLine(InputView.READ_MOVING_MSG, (moving) => {
			executeMovingStep(moving);
		});
	},

	executeMovingStep(moving) {
		Validation.validateMoving(moving);
	},

	readGameCommand() {},
};

module.exports = InputView;
