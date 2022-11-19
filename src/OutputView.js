const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printStart() {
    Console.print('다리 건너기 게임을 시작합니다.');
  },

  processBlock(block) {
    let mappedBlock = block.map((value, index) => {
      if (index !== block.length - 1) {
        value += ' | ';
      }
      return value;
    });
    return mappedBlock.join('');
  },

  printMap(UBlock, DBlock) {
    const processedUBlock = this.processBlock(UBlock);
    const processedDBlock = this.processBlock(DBlock);

    Console.print(`[ ${processedUBlock} ]`);
    Console.print(`[ ${processedDBlock} ]`);
  },

  printResult(result, blocks) {
    Console.print('최종 게임 결과');
    this.printMap(blocks[0], blocks[1]);

    Console.print(`게임 성공 여부: ${result}`);
    Console.print(`총 시도한 횟수: `);
    Console.close();
  },
};

module.exports = OutputView;
