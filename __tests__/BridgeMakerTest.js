const BridgeMaker = require("../src/BridgeMaker");
const MissionUtils = require("@woowacourse/mission-utils");

describe("다리 생성 테스트", () => {
  test("다리 배열 만들기 테스트", () => {
    const [arrUp, arrDown] = BridgeMaker.changeRandomArray(["1", "1", "0"]);
    let BRIDGE = [];
    BRIDGE.push(arrUp);
    BRIDGE.push(arrDown);
    expect(BRIDGE).toMatchObject([
      ["U", "U", " "],
      [" ", " ", "D"],
    ]);
  });
});
