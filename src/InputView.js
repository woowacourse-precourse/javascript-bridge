const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const MU = require("@woowacourse/mission-utils");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const GAME = new BridgeGame();

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @param {string[]} bridge 만들어진 다리. 재시작시 재사용
   */
  readBridgeSize() {
    MU.Console.readLine('다리의 길이를 입력해주세요.\n', (bridgeLen) => {
      try {
        OutputView.printBridgeSizeError(bridgeLen);
        let bridge = BridgeMaker.makeBridge(bridgeLen, BridgeRandomNumberGenerator.generate);
        this.readMoving([[],[]], bridge, 1);
      } catch(e) {
        MU.Console.print(e);
        this.readBridgeSize();
      }
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   * @param {string[][]} currentLocation 현재까지 이동한 다리, 이차원배열로 OX정보를 담고있다.
   * @param {number} count 총 시도 횟수
   */
  readMoving(currentLocation, bridge, count) {
    MU.Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (nextStep) => {
      try {
        OutputView.printMovingError(nextStep);
        currentLocation = GAME.move(currentLocation, nextStep, bridge);
        this.helpMoving(currentLocation, bridge, count);
      } catch(e) {
        MU.Console.print(e);
        this.readMoving(currentLocation, bridge, count);
      }
    })
  },

  helpMoving(currentLocation, bridge, count) {
    OutputView.printMap(currentLocation);
    if(currentLocation[0].includes('X') || currentLocation[1].includes('X'))
      this.readGameCommand(currentLocation, bridge, count);
    else if(currentLocation[0].length === bridge.length) 
      OutputView.printResult(currentLocation, 1, count);
    else this.readMoving(currentLocation, bridge, count); 
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(currentLocation, bridge, count) {
    MU.Console.readLine('\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (restart) => {
      try {
        OutputView.printGameCommandError(restart);
      } catch(e) {
        MU.Console.print(e);
        this.readGameCommand(currentLocation, bridge, count);
      }
      if(restart === 'R') this.readMoving(GAME.retry(currentLocation), bridge, count + 1);
      if(restart === 'Q') OutputView.printResult(currentLocation, 0, count);
    })
  },
};

module.exports = InputView;
