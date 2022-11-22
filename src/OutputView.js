/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge) {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
    let[top, down] = this.get

    top += ']';
    down += ']';

    MissionUtils.Console.print(`${top}\n${down}\n`);
  },

  gameResult(bridge) {
    let top = '[';
    let down = '[';

    bridge.currentPos.forEach((pos, index) => {
      top += this.add
    })
  },

  addTOPresult(bridge, pos, index) {
    let result = '';

    result += index === 0 ? '': '|';
    if(pos === 'U'){
      result += bridge.cellValidator(index)? 'O' : 'X';
    } else {
      result += '   ';
      return result;
    }
  },

  checkSuccess(bridge, currentPos){
    if(JSON.stringify(bridge) === JSON.stringify(currentPos)){
      return ;
    }
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridge) {
    MissionUtils.Console.print(' 최종 게임 결과');
    this.printMap(bridge);
    MissionUtils.Console.print(`게임 성공 여부 : ${checkSuccess()? "성공 ": "실패"}`);
  },
};

module.exports = OutputView;
