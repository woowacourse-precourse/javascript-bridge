const { Console } = require("@woowacourse/mission-utils");
const { BridgeSizeValid, MovingValid, RetryValid } = require("./InputValid.js");
const BridgeGame = require("./BridgeGame.js")
const GameStatus = require("./GameStatus.js")
const GameUtils = require("./GameUtils")
const BridgeMaker = require("./BridgeMaker.js")
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator.js");
const OutputView = require("./OutputView.js");

const validMove = ['U', 'D']
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리 건너기 게임을 시작합니다.\n\n다리의 길이를 입력해주세요.\n', (answer => {
      const inputSize = new BridgeSizeValid(answer).getSize()
      GameStatus.size = Number(inputSize);
      GameStatus.bridge = BridgeMaker
        .makeBridge(inputSize, BridgeRandomNumberGenerator).slice();
      console.log(GameStatus.bridge)
      this.readMoving();
    }))
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (answer => {
      const nextMove = new MovingValid(answer).getMove()
      const bridgeGame = new BridgeGame(nextMove)
      const moveByNum = validMove.indexOf(nextMove)
      const success = bridgeGame.move(moveByNum)
      if(success === false) this.readGameCommand(moveByNum);
      if(GameStatus.size === GameStatus.step) return OutputView.printResult(moveByNum);
      this.readMoving();
    }))
  },


  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (answer => {
      const retry = new RetryValid(answer).getRetry()
      GameStatus.step = 0;
      GameStatus.stage += 1;
      GameStatus.success = true;
      if(retry === 'Q') {
        return OutputView.printResult(moveByNum);
      }
      return this.readMoving();
    }))
  },
};

module.exports = { InputView, GameStatus };
