const BridgeGame = require("../src/BridgeGame");

describe("BridgeGame class 함수 기능테스트", () => {
  test("bridge 배열을 get 하는 함수 테스트", () => {
    const bridge = new BridgeGame(["U", "D", "D"], 0, 1);

    expect(bridge.getBridge()).toEqual(["U", "D", "D"]);
  });

  test("step을 get 하는 함수 테스트", () => {
    const bridge = new BridgeGame(["U", "D", "U"], 0, 1);

    expect(bridge.getStep()).toBe(0);
  });

  test("round를 get 하는 함수 테스트", () => {
    const bridge = new BridgeGame(["U", "D", "U"], 0, 1);

    expect(bridge.getRound()).toBe(1);
  });

  test("currentBridge을 get 하는 함수 테스트", () => {
    const bridge = new BridgeGame(["U", "D", "D"], 0, 1);

    expect(bridge.getCurrentBridge()).toEqual([]);
  });

  test("입력값과 정답이 일치하는지 확인하는 함수 테스트_1", () => {
    const bridge = new BridgeGame(["U", "D", "D"], 0, 1);
    const inputAnswer = "U";

    expect(bridge.checkInputIsCorrect(inputAnswer)).toBe(true);
  });

  test("입력값과 정답이 일치하는지 확인하는 함수 테스트_2", () => {
    const bridge = new BridgeGame(["U", "D", "D"], 1, 1);
    const inputAnswer = "D";

    expect(bridge.checkInputIsCorrect(inputAnswer)).toBe(true);
  });

  test("입력값과 정답이 일치하는지 확인하는 함수 테스트_3", () => {
    const bridge = new BridgeGame(["U", "D", "D"], 1, 1);
    const inputAnswer = "U";

    expect(bridge.checkInputIsCorrect(inputAnswer)).toBe(false);
  });

  test("마지막 단계인지 확인하는 함수 테스트_1", () => {
    const bridge = new BridgeGame(["U", "D", "D"], 1, 1);

    expect(bridge.checkIsLastStep()).toBe(false);
  });

  test("마지막 단계인지 확인하는 함수 테스트_@", () => {
    const bridge = new BridgeGame(["U", "D", "D"], 2, 1);

    expect(bridge.checkIsLastStep()).toBe(true);
  });
});
