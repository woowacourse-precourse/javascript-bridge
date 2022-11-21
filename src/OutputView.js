const MissionUtils = require('@woowacourse/mission-utils');
//사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
const FAILURE = 'failure';
const SUCCESS = 'success';

const OutputView = {
  printStart() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
  },

  //현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
  printMap(movingUpDown, currentBridge, bridgePrintString = ['', '']) {
    MissionUtils.Console.print('[' + bridgePrintString[0] + ']');
    MissionUtils.Console.print('[' + bridgePrintString[1] + ']');
  },

  editBridgeString(movingUpDown = '', currentBridge, bridgePrintString) {
    bridgePrintString = this.addBridgeSeperator(bridgePrintString);
    if (movingUpDown === 'U') {
      bridgePrintString[1] += '   ';
      bridgePrintString[0] += this.addYesOrNo(movingUpDown, currentBridge);
    }
    if (movingUpDown === 'D') {
      bridgePrintString[0] += '   ';
      bridgePrintString[1] += this.addYesOrNo(movingUpDown, currentBridge);
    }
    return bridgePrintString;
  },

  addBridgeSeperator(bridgePrintString) {
    if (bridgePrintString[0] != '' || bridgePrintString[1] != '') {
      bridgePrintString[0] += '|';
      bridgePrintString[1] += '|';
    }
    return bridgePrintString;
  },

  addYesOrNo(movingUpDown = '', currentBridge) {
    if (movingUpDown === currentBridge) {
      return ' O ';
    }
    if (movingUpDown !== currentBridge) {
      return ' X ';
    }
  },

  //InputView.readGameCommand에서 호출함
  //게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
  printResult(result, bridgePrintString = [], retryCount) {
    MissionUtils.Console.print('최종 게임 결과');
    MissionUtils.Console.print('[' + bridgePrintString[0] + ']');
    MissionUtils.Console.print('[' + bridgePrintString[1] + ']\n');
    this.printSuccess(result);
    MissionUtils.Console.print(`총 시도한 횟수: ${retryCount}`);
    //게임 종료
    MissionUtils.Console.close();
  },

  printSuccess(result) {
    if (result === FAILURE) {
      MissionUtils.Console.print('게임 성공 여부: 실패');
    }
    if (result === SUCCESS) {
      MissionUtils.Console.print('게임 성공 여부: 성공');
    }
  },
};

module.exports = OutputView;
