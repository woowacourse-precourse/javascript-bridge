const Validation = require("../src/Validation");

describe("input 유효성 테스트", () => {
	test.each([["2"], ["21"], ["-1"], ["abcd"]])(
		"다리 길이가 3이상 20이하인 숫자가 아니면 예외 발생",
		() => {
			expect((bridgeSize) => {
				Validation.validateBridgeSize(bridgeSize);
			}).toThrow("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
		},
	);

	test.each([["2"], ["21"], ["-1"], ["d"]])(
		"moving이 D 또는 U가아니면 예외 발생",
		() => {
			expect((moving) => {
				Validation.validateMoving(moving);
			}).toThrow("[ERROR] 이동할 칸은 대문자 D 또는 대문자 U 입니다.");
		},
	);
});
