const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('./message');
const BridgeGame = require('./BridgeGame');
const bg= new BridgeGame();
let restartcount=0;
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(upBridge, downBridge) {
    Console.print(upBridge + MESSAGE.bridge.bridgeEnd);
    Console.print(downBridge + MESSAGE.bridge.bridgeEnd);
  },

  printBridgeMap(message, count, size){
    if(count == 1) {
      arr1 = MESSAGE.bridge.bridgeStart+message[0];
      arr2 = MESSAGE.bridge.bridgeStart+message[1];
      OutputView.printMap(arr1, arr2);
    } else {
      arr1 += MESSAGE.bridge.bridgeAgain+message[0];
      arr2 += MESSAGE.bridge.bridgeAgain+message[1];
      OutputView.printMap(arr1, arr2);
      if(count == size) {
        OutputView.printResult('success');
      }
    }
  },

  printFail(upMessage, downMessage){
    arr1 += MESSAGE.bridge.bridgeAgain+upMessage;
    arr2 += MESSAGE.bridge.bridgeAgain+downMessage;
    Console.print(arr1 + MESSAGE.bridge.bridgeEnd + `\n` + arr2 + MESSAGE.bridge.bridgeEnd);
  },
  
  resetBridge(){
    arr1 = "";
    arr2 = "";
  },

  printResult(score){ 
    Console.print('최종 게임 결과');
    Console.print(arr1 + MESSAGE.bridge.bridgeEnd);
    Console.print(arr2 + MESSAGE.bridge.bridgeEnd);
    if(score == 'success') {
      Console.print(`게임 성공 여부: ${MESSAGE.gameScore.success}`)
    }
    else if(score == 'fail') {
      Console.print(`게임 성공 여부: ${MESSAGE.gameScore.fail}`)
    }
    Console.print(`총 시도한 횟수: ${OutputView.checkRestartCount()}`)//카운트 세기
  },

  checkRestartCount(){
    return restartcount += 1;
  },

  resetCount(){
    return restartcount = 0;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
};

module.exports = OutputView;
