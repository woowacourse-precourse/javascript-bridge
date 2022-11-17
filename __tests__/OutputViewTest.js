const { LETTER } = require("../src/constant");
const OutputView = require("../src/OutputView");

describe("결과에 맞는 다리 그림을 출력하는 지 확인", () => {
  const map1 = [
    ["U", "O"],
    ["U", "O"],
    ["D", "X"],
  ];
  const map2 = [["U", "X"]];

  test("다리 윗계단 그림 출력", () => {
    expect(OutputView.drawBridge(map1, LETTER.up)).toBe("[ O | O |   ]");
    expect(OutputView.drawBridge(map2, LETTER.up)).toBe("[ X ]");
  });

  test("다리 아랫계단 그림 출력", () => {
    expect(OutputView.drawBridge(map1, LETTER.down)).toBe("[   |   | X ]");
    expect(OutputView.drawBridge(map2, LETTER.down)).toBe("[   ]");
  });
});
