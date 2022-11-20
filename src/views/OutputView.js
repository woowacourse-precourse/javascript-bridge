const { Console } = require('@woowacourse/mission-utils');
const TemplateMaker = require('../utils/TemplateMaker.js');

const OutputView = {
  printMap(log) {
    const templates = TemplateMaker.getLogTemplates(log);

    templates.forEach((template) => {
      Console.print(template);
    });
  },

  printResult(logs, isSucceeded, tryCount) {
    const templates = TemplateMaker.getLogTemplates(logs);
    const succeedOfFail = isSucceeded ? '성공' : '실패';

    Console.print('최종 게임 결과\n');
    templates.forEach((template) => {
      Console.print(template);
    });
    Console.print(`\n게임 성공 여부: ${succeedOfFail}`);
    Console.print(`총 시도한 횟수: ${tryCount}`);
  },

  printMsg(message) {
    Console.print(message);
  },
};

module.exports = OutputView;
