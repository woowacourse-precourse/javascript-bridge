const { Console } = require('@woowacourse/mission-utils');
const TemplateMaker = require('../utils/TemplateMaker.js');

const OutputView = {
  printMap(log) {
    const templates = TemplateMaker.getLogTemplates(log);

    templates.forEach((template) => {
      Console.print(template);
    });
  },

  printResult(logs, isLatestMoveSucceeded, tryCount) {
    const templates = TemplateMaker.getFinalLogTemplates(logs, isLatestMoveSucceeded, tryCount);

    templates.forEach((template) => {
      Console.print(template);
    });
  },

  printMsg(message) {
    Console.print(message);
  },
};

module.exports = OutputView;
