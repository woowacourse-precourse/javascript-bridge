const MissionUtils = require('@woowacourse/mission-utils');

const MSG = {
  GAMESTART : '다리 건너기 게임을 시작합니다.\n',
  START : '[ ',
  MIDDLE : ' | ',
  END : ' ]',
  FINALRESULT : '최종 게임 결과',
  ISFINISHED : '게임 성공 여부: ',
  TRY : '총 시도한 횟수: ',
  SUCCESS : '성공',
  FAIL : '실패',
};

const OutputView = {
  printStart() {
    MissionUtils.Console.print(MSG.GAMESTART);
  },

  readyToPrintMap(moveData) {
    const upSide = [], downSide = [];
    for (let i = 0; i < moveData.length; i += 2) {
      this.pushMiddle(upSide,downSide);
      if (i === 0) {upSide.pop();downSide.pop()}
      upSide.push(moveData[i]); 
      downSide.push(moveData[i+1]);
    }
    return [upSide, downSide];
  },

  pushMiddle(upSide,downSide) {
    upSide.push(MSG.MIDDLE);
    downSide.push(MSG.MIDDLE);
  },
  
  mergeMap(map) {
    return MSG.START + map.join('') + MSG.END;
  },

  printMap(map) {
    const upSide = this.mergeMap(map[0]);
    const downSide = this.mergeMap(map[1]);
    const resultMap = upSide +'\n' + downSide +'\n';
    MissionUtils.Console.print(resultMap);
    return resultMap;
  },

  printResult(isFinished, tryCount, finalMap) {
    let successOrFail = MSG.FAIL;
    if(isFinished === true) successOrFail = MSG.SUCCESS;
    
    const final = MSG.FINALRESULT +'\n' + finalMap;

    MissionUtils.Console.print(final);
    MissionUtils.Console.print(MSG.ISFINISHED + successOrFail);
    MissionUtils.Console.print(MSG.TRY + tryCount);
  },
};

module.exports = OutputView;
