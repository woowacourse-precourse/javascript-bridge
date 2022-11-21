const MissionUtils = require("@woowacourse/mission-utils");
const Const = require('../src/constant/constant');
const message = require('../src/constant/message');


/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, current, input) {
    MissionUtils.Console.print('['+this.printMapLine(bridge, current, input, Const.MOVE[0])+']');
    MissionUtils.Console.print('['+this.printMapLine(bridge, current, input, Const.MOVE[1])+']');
  },

  printMapLine(bridge, current, input, flag){
    let result = '';
    for(let i = 0 ; i < current -1 ;i++){
      if(bridge[i] === flag) {result += ' O |';}
      else{result += '   |'}
    }
    if(input === flag && bridge[current-1] === flag) {result += ' O ';}
    else if(input === flag && bridge[current-1] !== flag) {result += ' X ';}
    else{result += '   '}
    return result.length === 0 ? '   ' : result;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridge, input, result, totalTry) {
    this.printMessage(message.MESSAGE.GAME_END);
    this.printMap(bridge, bridge.length, input);
    if(result) {this.printMessage(message.MESSAGE.SUCCESS);}
    else{this.printMessage(message.MESSAGE.FAIL);}
    this.printMessage(message.MESSAGE.GAME_RESULT+totalTry);
  },

  printMessage(message){
    MissionUtils.Console.print(message);
  }
};

module.exports = OutputView;
