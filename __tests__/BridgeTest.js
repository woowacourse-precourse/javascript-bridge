const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
describe("BridgeMaker 클래스 테스트", () => {
  test("입력받은 다리 길이에 따른 다리 생성 길이", () => {
    expect(
      BridgeMaker.makeBridge(5, BridgeRandomNumberGenerator.generate)
    ).toHaveLength(5);
  });
});
