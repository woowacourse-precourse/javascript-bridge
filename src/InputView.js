const BridgeGame = require('./BridgeGame');
const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  
  bridgeGame: new BridgeGame(),
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요", (bridgesize) => {
      this.checkBridgeSize(bridgesize);
      Console.print(bridgesize);
      this.readMoving(this.makeBridge(bridgesize));
    });
  },

  checkBridgeSize(bridgesize){
    if(isNaN(bridgesize)) throw new Error('[ERROR] 다리 길이는 숫자여야 합니다.');
    if(bridgesize<3 || bridgesize>20) throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  },

  makeBridge(bridgeSize) {
    return BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge) {
    Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)", (moving) => {
      this.checkMove(moving);
      Console.print(moving);
      const count = this.bridgeGame.counting();
      this.gameManager(bridge, count, moving);
    });
  },

  gameManager(bridge, count, moving) {
    const [up, down, hasCorrect] = this.bridgeGame.move(bridge[count-1], moving);
    OutputView.printMap(up,down);
    if (!hasCorrect) this.readGameCommand(up, down, bridge, hasCorrect);
    if (count === bridge.length && hasCorrect) {
      const trial = this.bridgeGame.retry();
      OutputView.printResult(up, down, trial, hasCorrect);
    }
    else this.readMoving(bridge);
  },

  checkMove(moving){
    if (moving !== 'U' && moving !== 'D') throw new Error('[ERROR] 이동할 칸은 "U"와 "D" 두 값중 하나여야합니다.');
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)", (command) => {
      this.checkCommand(command);
      if (command == 'R') {Console.print(command); this.bridgeGame.retry(); this.readMoving(bridge);}
      if (command == 'Q') { 
        Console.print(command);
        const trial = this.bridgeGame.retry(); 
        OutputView.printResult(up, down, trial, hasCorrect);
      }
    });
  }

};

module.exports = InputView;
