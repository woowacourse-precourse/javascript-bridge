const { getArrayLastIndex } = require("../src/utils");

describe("유틸 함수 테스트", () => {
  test("배열의 마지막 index", () => {
    const array = [1, 2, 3];
    expect(getArrayLastIndex(array)).toBe(2);
  });
});
