const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("../src/BridgeGame");


describe("다리 게임 테스트", () => {
  const userInput = ["U", "U", "D", "U"];
  const bridgeList = ["U", "D", "D", "U"];
  test("브릿지 정보와 사용자 입력값 비교 테스트", () => {
    const bridge = new BridgeGame();
    let trueOrFalse = [];
    for(let i = 0; i < userInput.length; i++) {
      trueOrFalse.push(bridge.isUserInputRightOrWrong(bridgeList[i], userInput[i]));
    }
    expect(trueOrFalse).toEqual([true, false, true, true]);
  });

  test("사용자 입력에 따른 UP 리스트와 DOWN 리스트, 이동 횟수 비교 테스트", () => {
    const bridge = new BridgeGame();
    let result;
    for(let i = 0; i < userInput.length; i++) {
      result = bridge.move(bridgeList, userInput[i]);
    }
    expect(result).toEqual([[['O', 'X', ' ', 'O'], [' ', ' ', 'O', ' ']], bridgeList.length]);
  })
})