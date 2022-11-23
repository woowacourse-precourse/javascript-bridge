const { Console } = require("@woowacourse/mission-utils");
const OutputView = require("./OutputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const ErrorCheck = require("./ErrorCheck");
let game = new BridgeGame();
let current = 0;
let bridgeSize = 0;
let iteration = 1;
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(`다리의 길이를 입력해주세요.\n`, (getSize) => {
      while (ErrorCheck.checkSize(getSize)) return this.readBridgeSize();
      bridgeSize = parseInt(getSize);
      game.setAnswer(BridgeMaker.makeBridge(getSize, BridgeRandomNumberGenerator.generate));
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    if (current >= bridgeSize) return OutputView.printResult(game.getMap(), game.getResult(), iteration);
    Console.readLine(`\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n`,(getUser)=>{
      while(ErrorCheck.checkUpDown(getUser)) return this.readMoving();
      game.setUser(getUser);
      if (game.move(current)) {
        current += 1;
        OutputView.printMap(game.getMap());
        return this.readMoving();
      }

      OutputView.printMap(game.getMap());
      return this.readGameCommand();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(`게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n`, (getRetry)=>{
      while (ErrorCheck.checkRetryQuit(getRetry)) return this.readGameCommand();
      if (game.retry(getRetry)) {
        current = 0;
        iteration++;
        return this.readMoving();
      }

      return OutputView.printResult(game.getMap(), game.getResult(), iteration);
    })
  },
};

module.exports = InputView;
