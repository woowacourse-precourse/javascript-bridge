const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printMap(CURRENTBRIDGE, CHECK, moveinput) {
    if(moveinput == 'U') {
      CURRENTBRIDGE[0].push(CHECK);
      CURRENTBRIDGE[1].push('   ');
      return CURRENTBRIDGE
    }
    CURRENTBRIDGE[0].push('   ');
    CURRENTBRIDGE[1].push(CHECK)
    return CURRENTBRIDGE
  },

  printCurrentBridge (CURRENTBRIDGE) {
    const CURRENTBRIDGEPRINT = `[${CURRENTBRIDGE[0].join('|')}]\n[${CURRENTBRIDGE[1].join('|')}]`
    Console.print(CURRENTBRIDGEPRINT)
  },

  printResult(CURRENTBRIDGE, CURRENTLOCATION, TRIALS) {
    let RESULT = '성공'
    if (CURRENTBRIDGE[0].length !== CURRENTLOCATION){
      RESULT = '실패'
    }
      Console.print('최종 게임 결과')
      this.printCurrentBridge(CURRENTBRIDGE)
      Console.print(`게임 성공 여부: ${RESULT}`)
      Console.print(`총 시도한 횟수: ${TRIALS}`)
  },
};

module.exports = OutputView;
