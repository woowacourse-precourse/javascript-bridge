const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

const InputView = {
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
		BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
		InputView.readMoving();
	},

	readMoving() {},

	readGameCommand() {},
};

module.exports = InputView;
