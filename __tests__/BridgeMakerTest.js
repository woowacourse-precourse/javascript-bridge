const BridgeMaker = require("../src/BridgeMaker");
const MissionUtils = require("@woowacourse/mission-utils");

describe("다리 생성 테스트", () => {
  test("다리 배열 만들기 테스트1", () => {
    const [arrUp, arrDown] = BridgeMaker.changeRandomArray(["U", "U", "D"]);
    let BRIDGE = [];
    BRIDGE.push(arrUp);
    BRIDGE.push(arrDown);
    expect(BRIDGE).toMatchObject([
      ["U", "U", " "],
      [" ", " ", "D"],
    ]);
  });
  test("다리 배열 만들기 테스트2", () => {
    const [arrUp, arrDown] = BridgeMaker.changeRandomArray(["D", "U", "D"]);
    let BRIDGE = [];
    BRIDGE.push(arrUp);
    BRIDGE.push(arrDown);
    expect(BRIDGE).toMatchObject([
      [" ", "U", " "],
      ["D", " ", "D"],
    ]);
  });
});
