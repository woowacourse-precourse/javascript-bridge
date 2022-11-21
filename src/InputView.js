const MissionUtils = require('@woowacourse/mission-utils');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')
const BridgeMaker = require('./BridgeMaker')
const BridgeGame = require('./BridgeGame')
const { BRIDGE_MOVING, RESULT } = require('./constant/InputMsg')
const OutputView = require('./OutputView');
const { validateisUpDown, validateBridgeSize, validateReStart } = require('./Error');
const { isWrongAnswer } = require('./validate/validate');

const InputView = {
  readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.\n', (bridgeSize) => {
      if(validateBridgeSize(bridgeSize)) return this.readBridgeSize();
      const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate)
      console.log(bridge)
      MissionUtils.Console.print('')
      const bridgeGame = new BridgeGame(bridge, BRIDGE_MOVING.list)
      this.readMoving(bridgeGame, bridge)
    })
  },

  readMoving(bridgeGame, bridgeSize) {
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (direction) => {
      if(validateisUpDown(direction)) return this.readMoving(bridgeGame, bridgeSize)
      const bridgeList = bridgeGame.move(direction);
      OutputView.printMap(bridgeList)
      if(isWrongAnswer(bridgeList)) return this.readGameCommand(bridgeGame, bridgeSize)
      if(bridgeList[0].length === bridgeSize.length) return OutputView.printResult(RESULT.success, bridgeGame)
      return this.readMoving(bridgeGame, bridgeSize)
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame, bridgeSize) {
    MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (userInput) => {
      if(validateReStart(userInput)) this.readGameCommand(bridgeGame, bridgeSize)
      if(userInput === 'R') {
        bridgeGame.retry()
        return this.readMoving(bridgeGame, bridgeSize)
      }
      if(userInput === 'Q') OutputView.printResult(RESULT.fail, bridgeGame)

    })
  }
};

module.exports = InputView;
