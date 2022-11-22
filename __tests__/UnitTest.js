const { returnCheckedMap } = require("../src/OutputView");

describe("다리 상태 반환 테스트", () => {
  test("case 1", () => {
    const bridge = ["U", "D", "D"];
    const tempPosition = 1;
    const status = false;
    expect(returnCheckedMap(bridge, tempPosition, status)).toEqual([
      [" O ", " X "],
      ["   ", "   "],
    ]);
  });

  test("case 2", () => {
    const bridge = ["U", "D", "D"];
    const tempPosition = 2;
    const status = true;
    expect(returnCheckedMap(bridge, tempPosition, status)).toEqual([
      [" O ", "   ", "   "],
      ["   ", " O ", " O "],
    ]);
  });

  test("case 3", () => {
    const bridge = ["U", "D", "D", "D", "U", "D"];
    const tempPosition = 2;
    const status = true;
    expect(returnCheckedMap(bridge, tempPosition, status)).toEqual([
      [" O ", "   ", "   "],
      ["   ", " O ", " O "],
    ]);
  });
});
