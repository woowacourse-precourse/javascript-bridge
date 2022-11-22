const Position = require("../src/model/Position");
const { POSITION_TWO } = require("../src/enum");

describe("Position도메인 테스트", () => {
  test("createPosition 테스트 [ERROR]지정되지 않은 커맨드 - 1", () => {
    expect(() => {Position.createPosition(POSITION_TWO, "1")}).toThrow("[ERROR]");
  });
	test("createPosition 테스트 [ERROR]지정되지 않은 커맨드 - u", () => {
    expect(() => {Position.createPosition(POSITION_TWO, "u")}).toThrow("[ERROR]");
  });
	test("getIndex 테스트 - U", () => {
		const position = Position.createPosition(POSITION_TWO, "U");
    expect(position.getIndex()).toEqual(1);
  });
	test("getIndex 테스트 - D", () => {
		const position = Position.createPosition(POSITION_TWO, "D");
    expect(position.getIndex()).toEqual(0);
  });
	test("isSame 테스트 - DU", () => {
		const target = Position.createPosition(POSITION_TWO, "D");
		const compare = Position.createPosition(POSITION_TWO, "U");
    expect(compare.isSame(target)).toEqual(false);
  });
	test("isSame 테스트 - UU", () => {
		const target = Position.createPosition(POSITION_TWO, "U");
		const compare = Position.createPosition(POSITION_TWO, "U");
    expect(compare.isSame(target)).toEqual(true);
  });
	test("isSame 테스트 - DD", () => {
		const target = Position.createPosition(POSITION_TWO, "D");
		const compare = Position.createPosition(POSITION_TWO, "D");
    expect(compare.isSame(target)).toEqual(true);
  });
	test("isSame 테스트 - UD", () => {
		const target = Position.createPosition(POSITION_TWO, "U");
		const compare = Position.createPosition(POSITION_TWO, "D");
    expect(compare.isSame(target)).toEqual(false);
  });
});
