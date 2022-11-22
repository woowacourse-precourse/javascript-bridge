const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const BridgeMaker = require("../src/BridgeMaker");
const BridgeGame = require("../src/BridgeGame");

describe("다리 검사", () => {
  test("다리가 0과 1로 이루어져 있는지 검사", () => {
    const randomNumber = BridgeRandomNumberGenerator.generate();
    expect(randomNumber === 0 || randomNumber === 1).toBeTruthy();
  });

  test("올바른 다리 생성 검사", () => {
    const randomNumbers = [1, 0, 1, 1];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());
    const bridge = BridgeMaker.makeBridge(4, mockGenerator);

    expect(bridge).toEqual(["U", "D", "U", "U"]);
  });

  test("제대로 된 사용자 값 입력시 반환값 테스트", () => {
    const bridgeGame = new BridgeGame();
    const bridge = ["U", "D", "D"];
    bridgeGame.setState({ bridge });

    const userMove = "U";
    expect(bridgeGame.move(userMove)).toEqual({
      inputHistory: ["U"],
      bridge,
    });
  });

  test("Command 선택시 Q 입력시 반환값 테스트", () => {
    const bridgeGame = new BridgeGame();

    expect(bridgeGame.retry("Q")).toBeFalsy();
  });

  test("Command 선택시 R 입력시 반환값 테스트", () => {
    const bridgeGame = new BridgeGame();

    expect(bridgeGame.retry("R")).toBeTruthy();
  });
});
