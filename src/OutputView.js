const { Console } = require('@woowacourse/mission-utils');
const BlockProcessor = require('./BlockProcessor');

const OutputView = {
  printStart() {
    Console.print('다리 건너기 게임을 시작합니다.');
  },

  printMap(UBlock, DBlock) {
    const processedUBlock = BlockProcessor(UBlock);
    const processedDBlock = BlockProcessor(DBlock);

    Console.print(`[ ${processedUBlock} ]`);
    Console.print(`[ ${processedDBlock} ]`);
    Console.print('');
  },

  printResult(result, blocks, numberOfTry) {
    Console.print('최종 게임 결과');

    this.printMap(blocks[0], blocks[1]);

    Console.print(`게임 성공 여부: ${result}`);
    Console.print(`총 시도한 횟수: ${numberOfTry}`);
    Console.close();
  },
};

module.exports = OutputView;
