/*eslint-disable*/
const BridgeGame = require("../src/BridgeGame");

describe("다리 게임 클래스 테스트", () => {
  test("경로 이동을 했을 때 U또는 D가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new BridgeGame(["U", "D", "U"]).move("u");
    }).toThrow("[ERROR]");
  });

  test("경로 이동을 했을 때 공백이 존재한다면 예외가 발생한다.", () => {
    expect(() => {
      new BridgeGame(["U", "D", "U"]).move("");
    }).toThrow("[ERROR]");
  });

  test("이동한 경로에 X가 포함되어있는지 테스트", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    const item = ["U", "D", "D"];
    item.forEach((v) => {
      bridgeGame.move(v);
    });
    expect(bridgeGame.checkX()).toEqual(false);
  });
});
