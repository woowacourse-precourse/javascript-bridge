const Judge = require("../src/utils/Judge");

describe("다리와 사용자입력 비교해서 올바른 값을 반환하는 지 테스트", () => {
  const moves1 = ["U", "D", "U", "U"];
  const moves2 = ["U"];
  const bridge = ["U", "D", "U", "D"];

  test("사용자 마지막입력과 다리가 일치하는 지 확인", () => {
    expect(Judge.isCorrect(bridge, moves1)).toBeFalsy();
    expect(Judge.isCorrect(bridge, moves2)).toBeTruthy();
  });

  test("사용자입력의 길이와 다리 길이가 일치하는 지 확인", () => {
    expect(Judge.isGameOver(bridge, moves1)).toBeTruthy();
    expect(Judge.isGameOver(bridge, moves2)).toBeFalsy();
  });
});
