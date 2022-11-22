const Result = require("../src/model/Result");
const Position = require("../src/model/Position");

describe("Result도메인 테스트", () => {
	const savedPositions = [new Position(1), new Position(0), new Position(1)];
	const movedPositions = [new Position(1), new Position(0)];
	test("stringify 테스트", () => {
		const result = new Result(null, savedPositions, movedPositions);
    expect(result.stringify()).toEqual([[1, 1], [0, 0]]);
  });
	test("isFailed테스트 - false", () => {
		const result = new Result(null, savedPositions, movedPositions);
    expect(result.isFailed()).toEqual(false);
  });
	test("isComplete 테스트(1) - false", () => {
		const result = new Result(null, savedPositions, movedPositions);
    expect(result.isComplete()).toEqual(false);
  });
	test("isFailed테스트 - true", () => {
		const result = new Result(null, savedPositions, [...movedPositions, new Position(0)]);
		expect(result.isFailed()).toEqual(true);
  });
	test("isComplete 테스트(2) - true", () => {
		const result = new Result(null, savedPositions, [...movedPositions, new Position(1)]);
		expect(result.isComplete()).toEqual(true);
  });
});
