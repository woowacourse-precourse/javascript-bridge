const BridgeGame = require("../src/BridgeGame");

describe("BridgeGame Class 테스트", () => {
	test("move 메소드로 현재입력까지 지나온 bridge배열 출력", () => {
		const randomNumbers = ["1", "0", "0", "1", "0"];
		const mockGenerator = randomNumbers.reduce((acc, number) => {
			return acc.mockReturnValueOnce(number);
		}, jest.fn());

		const bridgeGame = new BridgeGame(5, mockGenerator);
		bridgeGame.move("U");
		bridgeGame.move("D");
		bridgeGame.move("D");

		expect(bridgeGame.move("D")).toEqual(["UO", "DO", "DO", "DX"]);
	});
});
