const { Console } = require("@woowacourse/mission-utils");
const bridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const bridgeMaker = require("./BridgeMaker");
const outputView = require("./OutputView");
const Exception = require("./InputException");
const BridgeGame = require("./BridgeGame");
let bridgeGame = new BridgeGame();
let exception = new Exception();
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  bridge: [],
  bridgeLength: 0,
  moveCount: 0,
  successGame: "성공",
  failGame: "실패",
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.", (input) => {
      let checkError = exception.checkBridgeLength(input);
      if (!checkError) this.readBridgeSize();
      this.bridgeLength = Number(input);
      this.bridge = bridgeMaker.makeBridge(
        this.bridgeLength,
        bridgeRandomNumberGenerator.generate
      );
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine("이동할 칸을 선택해주세요.", (input) => {
      let checkError = exception.checkUpDown(input);
      if (!checkError) return this.readMoving();
      let bridgeMap = bridgeGame.move(input, this.bridge);
      outputView.printMap(bridgeMap);
      if (bridgeGame.moveResult === "X") this.readGameCommand();
      if (bridgeGame.moveResult === "O") this.moveCount++;
      if (this.moveCount === this.bridgeLength) return outputView.printResult(bridgeGame.tryCount, this.successGame);
      this.readMoving();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine("게임을 다시 시도할지 여부를 입력해주세요.(재시도 : R, 종료: Q)", (input) => {
      let checkError = exception.checkRestartEnd(input);
      if (!checkError) this.readGameCommand();
      if (input === "R") {
        this.moveCount = 0;
        bridgeGame.retry();
        this.readMoving();
      }
      if (input === "Q") return outputView.printResult(bridgeGame.tryCount, this.failGame);
    });
  },
};

console.log(InputView.readBridgeSize())

module.exports = InputView;