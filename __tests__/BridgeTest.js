const BridgeMaker = require("../src/BridgeMaker");
const BridgeGame = require('../src/BridgeGame');

describe("다리 건너기 테스트", () => {
  test("다리 생성 테스트", () => {
    const randomNumbers = [1, 1, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "U", "D"]);
  });

  test("다리 생성 테스트2", () => {
    const randomNumbers = [1, 1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(4, mockGenerator);
    expect(bridge).toEqual(["U", "U", "D", "D"]);
  });

  test("건넌 다리 표시 테스트", () => {
    expect(new BridgeGame().seekCurrentBridge( [ { U: 'O' }, { D: 'O' }, { U: 'O' } ])).toEqual([[" O ", "   ", " O "], ["   ", " O ", "   "]]);
  });

  test("건넌 다리 표시 테스트2", () => {
    expect(new BridgeGame().seekCurrentBridge( [ { U: 'O' }, { D: 'O' }, { U: 'X' } ])).toEqual([[" O ", "   ", " X "], ["   ", " O ", "   "]]);
  });
});
