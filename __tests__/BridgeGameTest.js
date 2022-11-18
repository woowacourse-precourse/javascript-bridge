const MissionUtils = require("@woowacourse/mission-utils");
const Game = require("../src/BridgeGame");

describe("BridgeGame 테스트", () => {
  test("다리 진행 테스트: 다리 건너기 성공", () => {
    const answers = ["U", "U", "U"];
    const outputBridge = { up: "[ O | O | O |", down: "[   |   |   |" };

    const output = new Game.BridgeGame(["U", "U", "U"]);
    answers.map((e) => {
      output.move(e);
    });
    expect(output.bridgeMap).toEqual(outputBridge);
  });
});
