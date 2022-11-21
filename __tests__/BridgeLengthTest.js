/*eslint-disable*/
const { sizeRegexTest } = require("../src/lib/bridgeSizeInputUtils");

describe("다리 길이 테스트", () => {
  test("다리 길이 3-20 범위 경곗값 테스트", () => {
    expect(sizeRegexTest(2)).toEqual(false);
    expect(sizeRegexTest(3)).toEqual(true);
    expect(sizeRegexTest(20)).toEqual(true);
    expect(sizeRegexTest(21)).toEqual(false);
  });

  test("다리 길이에 숫자가 아닌 값 테스트", () => {
    expect(sizeRegexTest("a")).toEqual(false);
    expect(sizeRegexTest("")).toEqual(false);
    expect(sizeRegexTest("!")).toEqual(false);
  });
});
