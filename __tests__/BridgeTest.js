const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const BridgeGame = require("../src/BridgeGame");
const BridgeMaker = require("../src/BridgeMaker");

describe("BridgeGame 기능 테스트", () => {
  const brgGame = new BridgeGame();
  test("move 메소드 테스트", () => {
    const moveFalse = brgGame.move(1, ["U", "D", "D"], "U");
    const moveTrue = brgGame.move(1, ["U", "U", "D"], "U");
    const moveTrueEnd = brgGame.move(2, ["U", "U", "D"], "D");
    expect(moveFalse).toEqual(-1);
    expect(moveTrue).toEqual(1);
    expect(moveTrueEnd).toEqual(0);
  });

  test("retry 메소드 테스트", () => {
    expect(brgGame.retry("R")).toEqual(1);
    expect(brgGame.retry("Q")).toEqual(0);
  });
});

describe("BridgeMaker 기능 테스트", () => {
  test("makeBridge 테스트 (1)", () => {
    const randomNumbers = [0, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["D", "D", "D"]);
  });

  test("makeBridge 테스트 (2)", () => {
    const randomNumbers = [1, 1, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "U", "D"]);
  });
});
