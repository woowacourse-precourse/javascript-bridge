const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require('./BridgeMaker')
const BridgeGame = require('./BridgeGame')
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Validation = require('./Validation');
const OutputView = require('./OutputView')

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.', (bridgeLength) => {
      console.log(`다리의 길이를 입력해주세요.\n${bridgeLength}`);
      const ckeckNum = new Validation();
      ckeckNum.checkNum(bridgeLength);
      const bridge = BridgeMaker.makeBridge(bridgeLength, BridgeRandomNumberGenerator.generate);
      this.readMoving(bridge, [], 1);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, arr, count) {
    let moves = arr;
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (moveInputValue) => {
      console.log(`이동할 칸을 선택해주세요. (위: U, 아래: D)\n${moveInputValue}`);
      const ckeckMove = new Validation();
      ckeckMove.checkMove(moveInputValue);
      moves += moveInputValue;
      this.moveBridgeGame(bridge, moves, count)
    });
  },

  /**
   * 사용자의 입력된 값에 따른 BridgeGame.move
   */
  moveBridgeGame(bridge, moves, count) {
    const bridgeGame = new BridgeGame();
    if(bridgeGame.move(bridge, moves)) {
      OutputView.printMap(bridge, moves);
    } else {
      OutputView.printMap(bridge, moves);
      this.readGameCommand(count);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(count) {
    MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', (gameRetry) => {
      console.log(`게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n${gameRetry}`);
      const checkRetry = new Validation();
      checkRetry.checkRetry(gameRetry);
      this.readGameCommand(gameRetry, count)
    });
  },

  /**
   * 사용자의 입력된 값에 따른 BridgeGame.retry
   */
  regameBridgeGame(gameRetry, count) {
    const bridgeGame = new BridgeGame();
    bridgeGame.retry(gameRetry, count)
  },
}

module.exports = InputView;
