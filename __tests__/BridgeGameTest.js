const BridgeCreate = require("../src/Bridge.Domain/BridgeCreator");
const Bridge = require("../src/Bridge.Domain/Bridge");
const BridgeGame = require("../src/Bridge.Domain/BridgeGame");
const Player = require("../src/Bridge.Domain/Player");
const { GAME } = require("../src/lib/Const");

describe("다리게임 테스트", () => {
  test("다리 생성 테스트", () => {
    const bridge = BridgeCreate.create(3);
    expect(bridge).toMatchObject(new Bridge());
  });

  const bridgeGame = new BridgeGame();
  const player = new Player();
  bridgeGame.setting(["U", "U", "D"]);

  const expected = [
    [["U"], GAME.STATUS.PLAY],
    [["U", "U"], GAME.STATUS.PLAY],
    [["U", "U", "D"], GAME.STATUS.END],
  ];
  test("다리 게임 앞으로 가기 테스트 ", () => {
    inputDirection.forEach((direction, index) => {
      const result = bridgeGame.move(player, direction);
      console.log(result);
      expect(result).toStrictEqual(expected[index]);
    });
  });
  const inputDirection = ["U", "U", "D"];
});
