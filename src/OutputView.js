const { Console } = require("@woowacourse/mission-utils");
const Message = require('./Message');
const BridgeGame = require("./BridgeGame");
const Constant = require('./Constant');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
   printStart() {
    Console.print(Message.INFORMATION.gameStart);
  },

  printError(error) {
    Console.print(error);
  },
  
  printMap(userInputs) {
    const movingArray = [[], []];
    userInputs.forEach((userInput) => {
      this.pushBridgeArray(userInput, movingArray);
    });

    Console.print(`[${movingArray[Constant.UP_ARRAY].join("|")}]\n[${movingArray[Constant.DOWN_ARRAY].join("|")}]\n`);
  },

  pushBridgeArray(userInputObj, movingArray) {
    const userInput = Object.keys(userInputObj)[Constant.FIRST_INDEX];

    if (userInput === Constant.UPPER_ALPHABET) {
      this.pushMoving([0, 1], movingArray, userInputObj[userInput]);
    }

    if (userInput === Constant.LOWER_ALPHABET) {
      this.pushMoving([1, 0], movingArray, userInputObj[userInput]);
    }
  },

  pushMoving(numbers, movingArray, symbol) {
    const [number1, number2] = numbers;
    movingArray[number1].push(` ${symbol} `);
    movingArray[number2].push("   ");
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
   printResult(state, thisValue) {
    const bridgeGame = new BridgeGame();
    Console.print(Message.INFORMATION.gameFinishResult);
    this.printMap(bridgeGame.getCurrentMovingBridge.call(thisValue));
    Console.print(`${Message.INFORMATION.gameResult} ${state}\n${Message.INFORMATION.totalCount} ${bridgeGame.getTry.call(thisValue)}`);
    Console.close();
  },

};

module.exports = OutputView;
