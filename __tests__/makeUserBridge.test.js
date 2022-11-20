const { makeUserBridge } = require("../src/BridgeMaker");

describe("유저 다리 생성 테스트", () => {
  test("유저 윗 다리 생성 테스트", () => {
    const userBridge = makeUserBridge("U", [[], []], ["U", "D", "U"]);
    expect(userBridge).toEqual([["O"], [" "]]);
  });

  test("유저 틀린 윗 다리 생성 테스트", () => {
    const userBridge = makeUserBridge("U", [[], []], ["D", "D", "U"]);
    expect(userBridge).toEqual([["X"], [" "]]);
  });

  test("유저 아래 다리 생성 테스트", () => {
    const userBridge = makeUserBridge("D", [[], []], ["D", "D", "U"]);
    expect(userBridge).toEqual([[" "], ["O"]]);
  });

  test("유저 아래 다리 실패 생성 테스트", () => {
    const userBridge = makeUserBridge("D", [[], []], ["U", "D", "U"]);
    expect(userBridge).toEqual([[" "], ["X"]]);
  });
});
