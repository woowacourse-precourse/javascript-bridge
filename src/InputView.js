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
			InputView.START_MSG + "\n" + InputView.READ_BRIDGE_SIZE_MSG,
			(bridgeSize) => {
				ExecuteBridgeSizeStep(bridgeSize);
			},
		);
	},

	ExecuteBridgeSizeStep(bridgeSize) {
		Validation.validateBridgeSize(bridgeSize);
		InputView.bridge = BridgeMaker.makeBridge(
			bridgeSize,
			BridgeRandomNumberGenerator.generate,
		);
		InputView.readMoving();
	},

	readMoving() {
		MissionUtils.Console.readLine(InputView.READ_MOVING_MSG, (moving) => {
			ExecuteMovingStep(moving);
		});
	},

	ExecuteMovingStep(moving) {
		Validation.validateMoving(moving);
	},

	readGameCommand() {},
};

module.exports = InputView;
