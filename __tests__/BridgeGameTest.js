const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("../src/BridgeGame");


describe("다리 게임 테스트", () => {
  test("브릿지 정보와 사용자 입력값 비교 테스트", () => {
    const bridge = new BridgeGame();
    const userInput = ["U", "U", "D", "U"];
    const bridgeList = ["U", "D", "D", "U"];
    let trueOrFalse = [];
    for(let i = 0; i < userInput.length; i++) {
      trueOrFalse.push(bridge.isUserInputRightOrWrong(bridgeList[i], userInput[i]));
    }
    expect(trueOrFalse).toEqual([true, false, true, true]);
  });
})