const Progress = require("../src/Progress");

describe("Progress 테스트", () => {
  test("첫번째 다리 건너기 성공", () => {
    const progress = new Progress();
    progress.success("U");
    const { firstBridge, secondBridge } = progress.desc();
    expect(firstBridge).toEqual("[ O ]");
    expect(secondBridge).toEqual("[   ]");
  });

  test("두번째 다리 건너기 성공", () => {
    const progress = new Progress();
    progress.success("U");
    progress.success("D");
    const { firstBridge, secondBridge } = progress.desc();
    expect(firstBridge).toEqual("[ O |   ]");
    expect(secondBridge).toEqual("[   | O ]");
  });

  test("세번째 다리 건너기 실패", () => {
    const progress = new Progress();
    progress.success("U");
    progress.success("D");
    progress.fail("U");
    const { firstBridge, secondBridge } = progress.desc();
    expect(firstBridge).toEqual("[ O |   | X ]");
    expect(secondBridge).toEqual("[   | O |   ]");
  });

  test("만약 U나 D가 아닌 값이 들어온다면 예외처리", () => {
    const progress = new Progress();
    expect(() => {
      progress.success("Z");
    }).toThrow("[ERROR]");
  });
});
