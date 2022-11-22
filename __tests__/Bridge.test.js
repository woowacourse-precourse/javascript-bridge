const BridgeMaker = require("../src/BridgeMaker");
const randomBridge = require("../src/BridgeRandomNumberGenerator");
const BridgeGame = require("../src/BridgeGame");

describe("다리만들기 테스트", () => {
  test("입력받은 다리 길이 만큼 다리를 생성해야 한다.", () => {
    //given
    const bridgeLength = 3;
    const makeRandomBridgeFunc = randomBridge.generate;
    //when
    const result = BridgeMaker.makeBridge(bridgeLength, makeRandomBridgeFunc);
    //then
    expect(result).toHaveLength(bridgeLength);
  });
});

describe("사용자가 입력한 이동을 확인", () => {
  test("사용자의 입력과 칸이 맞으면 true를 반환", () => {
    //given
    const userInput = "U";
    //when
    const makeRandomBridgeFunc = jest.fn().mockReturnValueOnce(1);
    const bridge = BridgeMaker.makeBridge(1, makeRandomBridgeFunc);
    const bridgeGame = new BridgeGame();
    const result = bridgeGame.move(userInput, bridge);
    //then
    expect(result).toBeTruthy();
  });

  test("사용자의 입력과 칸이 다르면 false를 반환", () => {
    //given
    const userInput = "D";
    //when
    const makeRandomBridgeFunc = jest.fn().mockReturnValueOnce(1);
    const bridge = BridgeMaker.makeBridge(1, makeRandomBridgeFunc);
    const bridgeGame = new BridgeGame();
    const result = bridgeGame.move(userInput, bridge);
    //then
    expect(result).toBeFalsy();
  });
});
