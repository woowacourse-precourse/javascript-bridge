const MissionUtils = require("@woowacourse/mission-utils");
const { BRIDGE_NUMBER_INPUT, PLAYER_MOVE_INPUT, RESTART_OR_QUIT_INPUT, SUCCESS, FAIL } = require("../utils/constant")
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator.js")
const BridgeMaker = require("../BridgeMaker.js");
const BridgeGame = require("../BridgeGame.js");
const OutputView = require("./OutputView")
const {
  bridgeLengthValidate,
  userMoveValidate,
  userRetryValidate
} = require('../validateFunction')
const {
  moveListPush,
} = require('../controller/controller')
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(BRIDGE_NUMBER_INPUT, (bridgeSize) => {
      if(bridgeLengthValidate(bridgeSize)) return this.readBridgeSize();
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
      if(userMoveValidate(playerMove)) return this.readMoving(playerMoveList, bridgeGame, bridgeSize)
      playerMoveList=moveListPush(playerMoveList, playerMove)
      const gameResult=bridgeGame.move(playerMoveList, bridgeSize);
      if(playerMoveList.length===Number(bridgeSize)) return OutputView.printResult(gameResult, SUCCESS, bridgeGame.getTotalTry())
      if(gameResult.includes('X')) this.readGameCommand(gameResult, bridgeGame, bridgeSize);
      return this.readMoving(playerMoveList, bridgeGame, bridgeSize);
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(gameResult, bridgeGame, bridgeSize) {
    MissionUtils.Console.readLine(RESTART_OR_QUIT_INPUT, (answer) => {
      if(userRetryValidate(answer)) return this.readGameCommand(gameResult, bridgeGame, bridgeSize)
      if(answer==='Q') OutputView.printResult(gameResult, FAIL, bridgeGame.getTotalTry())
      if(answer==='R') {
        bridgeGame.retry();
        this.readMoving([], bridgeGame, bridgeSize)
      }
    })
  },
};

module.exports = InputView;
