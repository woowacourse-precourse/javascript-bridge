const OutputView = require("../src/OutputView");
describe("출력용 다리 생성 테스트", () => {
  const BRIDGE = ["U", "D", "U", "D"];
  test("설정에 따른 라인 생성 테스트", () => {
    expect(() => {
      OutputView.makeBridgeLine(BRIDGE, "U").toEqual(["O", " ", "O", " "]);
    });
    expect(() => {
      OutputView.makeBridgeLine(BRIDGE, "D").toEqual([" ", "O", " ", "O"]);
    });
  });
});
