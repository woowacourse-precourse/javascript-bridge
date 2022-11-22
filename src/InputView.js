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

  // wrappingInput(message, callback) {
  //   Console.readLine(
  //     message,
  //     this.wrappingLogic(callback, () => this.wrappingInput(message, callback))
  //   );
  // },

  // wrappingLogic(logicFunction, errorFunction) {
  //   return (input) => {
  //     try {
  //       logicFunction(input);
  //     } catch (e) {
  //       Console.print(e.message);
  //       errorFunction(e);
  //     }
  //   };
  // },

  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요", (bridgesize) => {
      try {
        this.checkBridgeSize(bridgesize);
        this.readMoving(this.makeBridge(bridgesize));
      } catch (e) {
        Console.print(e);
        this.readBridgeSize();
      }
    });
  },

  checkBridgeSize(bridgesize){
    const size = Number(bridgesize);
    if(size < 3 || size > 20 || isNaN(size)) throw Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
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
    if (moving !== 'U' && moving !== 'D') throw new Error('[ERROR] 이동할 칸은 U와 D 두 값중 하나여야합니다.');
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(up, down, bridge, hasCorrect) {
    Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)", (command) => {
      this.checkCommand(command);
      if (command == 'R') {Console.print(command); this.bridgeGame.retry(); this.readMoving(bridge);}
      if (command == 'Q') { 
        Console.print(command);
        const trial = this.bridgeGame.retry(); 
        OutputView.printResult(up, down, trial, hasCorrect);
      }
    });
  },

  checkCommand(command){
    if (command !== 'R' && command !== 'Q') throw new Error('[ERROR] 게임여부는 "R"와 "Q" 두 값중 하나여야합니다.');
  },

};

module.exports = InputView;
