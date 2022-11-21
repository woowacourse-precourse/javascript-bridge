const { Console } = require("@woowacourse/mission-utils");
const OutputView = require("./OutputView");
const BridgeMaker = require("./BridgeMaker");
const generateRandomNumber = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
let game = new BridgeGame();
let current = 0;
let bridgeSize = 0;
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(`다리의 길이를 입력해주세요.\n`,(getSize)=>{
      bridgeSize = parseInt(getSize);
      game.answer = BridgeMaker.makeBridge(getSize, generateRandomNumber);
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    if (current >= bridgeSize) return OutputView.printResult(game.map, game.result, game.count);
    Console.readLine(`이동할 칸을 선택해주세요. (위: U, 아래: D)\n`,(getUser)=>{
      game.user = getUser;
      if (game.move(current++)) {
        OutputView.printMap(game.map);
        return this.readMoving();
      }
      OutputView.printMap(game.map);
      return this.readGameCommand();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)", (getRetry)=>{
      if(game.retry(getRetry)){
        current = 0;
        return this.readMoving();
      }
      return OutputView.printResult(game.map, game.result, game.count);
    })
  },
};

module.exports = InputView;
