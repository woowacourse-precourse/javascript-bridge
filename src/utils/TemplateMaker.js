const { UPSIDE_SYMBOL, DOWNSIDE_SYMBOL } = require('../constants/condition.js');

const SYMBOLS = {
  start: '[',
  end: ']',
  fail: 'X',
  success: 'O',
  blank: ' ',
  separator: ' | ',
};

class TemplateMaker {
  static getLogTemplates(logs) {
    const upsideTemplate = TemplateMaker.#makeLogTemplate(logs, UPSIDE_SYMBOL);
    const downsideTemplate = TemplateMaker.#makeLogTemplate(logs, DOWNSIDE_SYMBOL);

    return [upsideTemplate, downsideTemplate];
  }

  static getFinalLogTemplates(logs, isLatestMoveSucceeded, tryCount) {
    const logTemplates = TemplateMaker.getLogTemplates(logs);
    const title = '\n최종 게임 결과\n';
    const successOrFail = `\n게임 성공 여부: ${isLatestMoveSucceeded ? '성공' : '실패'}`;
    const totalTry = `총 시도한 횟수: ${tryCount}`;

    return [title, ...logTemplates, successOrFail, totalTry];
  }

  static #makeLogTemplate(logs, directionSymbol) {
    const template = logs
      .map(({ isCrossable, direction }) => {
        const isSymbolSide = direction === directionSymbol;

        if (isCrossable && isSymbolSide) return SYMBOLS.success;
        if (!isCrossable && isSymbolSide) return SYMBOLS.fail;

        return SYMBOLS.blank;
      })
      .join(SYMBOLS.separator);

    return `${SYMBOLS.start} ${template} ${SYMBOLS.end}`;
  }
}

module.exports = TemplateMaker;
