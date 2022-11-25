const Position = require("../src/model/Position");

describe("Position도메인 테스트", () => {
	test("getIndex 테스트 - U", () => {
		const position = new Position(1);
    expect(position.getIndex()).toEqual(1);
  });
	test("getIndex 테스트 - D", () => {
		const position = new Position(0);
    expect(position.getIndex()).toEqual(0);
  });
	test("isSame 테스트 - DU", () => {
		const target = new Position(0);
		const compare = new Position(1);
    expect(compare.isSame(target)).toEqual(false);
  });
	test("isSame 테스트 - UU", () => {
		const target = new Position(1);
		const compare = new Position(1);
    expect(compare.isSame(target)).toEqual(true);
  });
	test("isSame 테스트 - DD", () => {
		const target = new Position(0);
		const compare = new Position(0);
    expect(compare.isSame(target)).toEqual(true);
  });
	test("isSame 테스트 - UD", () => {
		const target = new Position(1);
		const compare = new Position(0);
    expect(compare.isSame(target)).toEqual(false);
  });
});
