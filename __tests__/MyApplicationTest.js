const BridgeGame = require("../src/bridge/BridgeGame");
const { makeBridge } = require("../src/BridgeMaker");

const ErrorMessage = require("../src/messages/ErrorMessage");

describe("My Application Test", () => {
  describe("Bridge Game", () => {
    it("U, D 외에 다른 값을 받으면 예외를 발생시켜야 한다.", () => {
      const bridgeGame = new BridgeGame(["U", "D"]);
      expect(() => {
        bridgeGame.move("F");
      }).toThrow(ErrorMessage.NOT_VALID_DIRECTION);
    });
  });

  describe("Bridge Maker", () => {
    it("size에 숫자 외의 값이 입력되면 예외를 발생시켜야 한다.", () => {
      expect(() => {
        makeBridge("abc");
      }).toThrow(ErrorMessage.NOT_INTEGER);
    });
  });
});
