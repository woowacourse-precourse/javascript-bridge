const MissionUtils = require("@woowacourse/mission-utils");
const { BRIDGE_NUMBER_INPUT, PLAYER_MOVE_INPUT, RESTART_OR_QUIT_INPUT, SUCCESS, FAIL } = require("../utils/constant")
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator.js")
const BridgeMaker = require("../BridgeMaker.js");
const BridgeGame = require("../BridgeGame.js");
const OutputView = require("./OutputView")
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(BRIDGE_NUMBER_INPUT, (bridgeSize) => {
      const bridge=BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
      const bridgeGame= new BridgeGame(bridge, bridgeSize);
      this.readMoving([],bridgeGame, bridgeSize);
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(playerMoveList,bridgeGame, bridgeSize) {
    MissionUtils.Console.readLine(PLAYER_MOVE_INPUT, (playerMove) => {
      playerMoveList.push(playerMove);
      const gameResult=bridgeGame.move(playerMoveList);
      OutputView.printMap(gameResult);
      if(gameResult.includes('X')){
        return this.readGameCommand(gameResult, bridgeGame, bridgeSize);
      }
      if(playerMoveList.length===Number(bridgeSize)) return OutputView.printResult(gameResult, SUCCESS, bridgeGame.getTotalTry())
      return this.readMoving(playerMoveList, bridgeGame, bridgeSize);
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(gameResult, bridgeGame, bridgeSize) {
    MissionUtils.Console.readLine(RESTART_OR_QUIT_INPUT, (answer) => {
      if(answer==='Q') OutputView.printResult(gameResult, FAIL, bridgeGame.getTotalTry())
      if(answer==='R') {
        bridgeGame.retry();
        this.readMoving([], bridgeGame, bridgeSize)
      }
    })
  },

  gameFinish(){
    MissionUtils.Console.close()
  }
};

module.exports = InputView;
