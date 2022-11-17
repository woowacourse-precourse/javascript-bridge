const OutputView = require("../src/OutputView");
const MissionUtils = require("@woowacourse/mission-utils");

describe("BridgeGame Class 테스트", () => {
	test("현재입력까지 지나온 bridge배열을 map형태로 바꾸어 출력", () => {
		const logSpy = jest.spyOn(MissionUtils.Console, "print");
		const log = "[ O |   |   ]\n[   | O | O ]";

		const currentBridge = ["UO", "DO", "DO"];
		OutputView.printMap(currentBridge);

		expect(logSpy).toHaveBeenCalledWith(log);
	});
});
