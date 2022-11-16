const Validation = require("../src/Validation");

describe("input 유효성 테스트", () => {
	test.each([["2"], ["21"], ["-1"], ["abcd"]])(
		"다리 길이가 3이상 20이하인 숫자가 아니면 예외 발생",
		(bridgeSize) => {
			expect((bridgeSize) => {
				Validation.validateBridgeSize(bridgeSize);
			}).toThrow("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
		},
	);
});
