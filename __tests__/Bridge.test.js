const Bridge = require("../src/model/Bridge");
const Position = require("../src/model/Position");

describe("Bridge도메인 테스트", () => {
	const savedPositions = [new Position(1), new Position(0), new Position(1)];
	const bridge = new Bridge(savedPositions);
  test("curResult() 테스트1", () => {
		expect(bridge.currentResult().stringify()).toEqual([]);
  });
	test("curResult() 테스트2", () => {
		bridge.movePosition(new Position(1));
		expect(bridge.currentResult().stringify()).toEqual([[1, 1]]);
  });
});
