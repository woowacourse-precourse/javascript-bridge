const OutputView = require("../src/OutputView");

describe("OutputView 객체안의 util성 함수 기능 테스트", () => {
  test("문자열의 마지막 원소를 제외한 나머지 문자열을 반환하는 함수 테스트", () => {
    const targetStr = "woowa";
    expect(OutputView.sliceLastString(targetStr)).toBe("woow");
  });

  test("문자열의 마지막에 ] 를 추가하는 함수 테스트 ", () => {
    const targetStr = "[woowa";
    expect(OutputView.addLastCloseMark(targetStr)).toBe("[woowa]");
  });
});
