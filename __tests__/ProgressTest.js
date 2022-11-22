const Progress = require("../src/Progress");

describe("Progress 테스트", () => {
  test("command가 U나 D가 아니라면 에러 발생", () => {
    const progress = new Progress();
    expect(() => progress.success("Z")).toThrow();
    expect(() => progress.fail("Z")).toThrow();
  });

  test("첫번째 다리 건너기 성공", () => {
    const progress = new Progress();
    progress.success("U");
    const [upBridges, downBridges] = progress.desc();
    expect(upBridges).toEqual(["O"]);
    expect(downBridges).toEqual([" "]);
  });

  test("두번째 다리 건너기 성공", () => {
    const progress = new Progress();
    progress.success("U");
    progress.success("D");
    const [upBridges, downBridges] = progress.desc();
    expect(upBridges).toEqual(["O", " "]);
    expect(downBridges).toEqual([" ", "O"]);
  });

  test("세번째 다리 건너기 실패", () => {
    const progress = new Progress();
    progress.success("U");
    progress.success("D");
    progress.fail("U");
    const [upBridges, downBridges] = progress.desc();
    expect(upBridges).toEqual(["O", " ", "X"]);
    expect(downBridges).toEqual([" ", "O", " "]);
  });
});
