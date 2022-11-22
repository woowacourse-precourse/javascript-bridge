const Io = require('../Io');

const OutputView = {
 
  printMap({ upMap, downMap }) {
    Io.output(upMap);
    Io.output(downMap);
    Io.output(`\n`);
  },

  printStart() {
    Io.output('다리 건너기 게임을 시작합니다.')
  },
  printResult({map, result}) {
    Io.output('최종 게임 결과');
    OutputView.printMap(map);
    Io.output(`게임 성공 여부: ${result.isCompleted}`);
    Io.output(`총 시도한 횟수: ${result.count}`);
    Io.close();
  },
  error(error) {
    Io.output(error);
  }
};

module.exports = OutputView;
