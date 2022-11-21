const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("../src/BridgeGame");
const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const OutputView = require("../src/OutputView");
describe("BridgeMaker 클래스 테스트", () => {
  test("입력받은 다리 길이에 따른 다리 생성 길이", () => {
    expect(
      BridgeMaker.makeBridge(5, BridgeRandomNumberGenerator.generate)
    ).toHaveLength(5);
  });
});

describe("BridgeGame 클래스 테스트", () => {
  let bridgeGame;
  beforeEach(() => {
    bridgeGame = new BridgeGame();
  });
  test("건널 수 있는 칸을 건넜을 때", () => {
    const expected = [1, ["O"], ["U"]];
    expect(bridgeGame.move("U", 0, ["U", "D", "U"])).toEqual(expected);
  });
  test("건널 수 없는 칸을 건넜을 때", () => {
    const expected = [1, ["X"], ["D"]];
    expect(bridgeGame.move("D", 0, ["U", "D", "U"])).toEqual(expected);
  });
});

describe("결과 테스트", () => {
  test("주어진 길이의 모든 다리를 건넜을 때", () => {
    const expected = "성공";
    expect(OutputView.checkSuccess(["O", "O", "O", "O"])).toBe(expected);
  });

  test("주어진 길이의 모든 다리를 건너지 못했을 때", () => {
    const expected = "실패";
    expect(OutputView.checkSuccess(["O", "O", "X"])).toBe(expected);
  });
});

describe("다리 건너기에 따른 다리 출력", () => {
  test("윗 다리를 1번 건넜을 때 건널 수 있는 다리가 위쪽에 있는 경우", () => {
    expect(OutputView.makeMap(["U"], ["O"])).toEqual(["[ O ]", "[   ]"]);
  });
  test("윗 다리를 여러 번 건넜을 때 건널 수 있는 다리가 위쪽에 있는 경우", () => {
    expect(OutputView.makeMaps(["U", "U"], ["O", "O"])).toEqual(["[ O | O ]", "[   |   ]"]);
  });
  test("아랫 다리를 1번 건넜을 때 건널 수 있는 다리가 아래 쪽에 있는 경우", () => {
    expect(OutputView.makeMap(["D"], ["O"])).toEqual(["[   ]", "[ O ]"]);
  });
  test("아랫 다리를 여러 번 건넜을 때 건널 수 있는 다리가 아래 쪽에 있는 경우", () => {
    expect(OutputView.makeMaps(["D", "D"], ["O", "O"])).toEqual([
      "[   |   ]",
      "[ O | O ]",
    ]);
  });
});
