const TraceController = require("../src/utils/TraceController");

describe("TraceController 객체 테스트", () => {
  test("다리건너기 실패시 trace 테스트", () => {
    const result = TraceController.makeTrace(
      "U",
      ["U"],
      ["D", "U", "U"],
      [[], []]
    );
    expect(result).toEqual([[" X "], ["   "]]);
  });

  test("다리건너기 성공시 trace 테스트", () => {
    const result = TraceController.makeTrace(
      "D",
      ["D"],
      ["D", "U", "U"],
      [[], []]
    );
    expect(result).toEqual([["   "], [" O "]]);
  });

  test("다리건너기 실패시 실패여부 판단 테스트", () => {
    const result = TraceController.determineFail([["   "], [" O "]]);
    expect(result).toEqual(false);
  });

  test("다리건너기 성공시 실패여부 판단 테스트", () => {
    const result = TraceController.determineFail([["   "], [" X "]]);
    expect(result).toEqual(true);
  });

  test("재도전시 생성된 trace 리셋 테스트", () => {
    const result = TraceController.resetTrace([
      ["   ", "   "],
      [" O ", " X "],
    ]);
    expect(result).toEqual([["   "], [" O "]]);
  });
});
