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

  static #makeLogTemplate(logs, directionSymbol) {
    const template = logs
      .map(({ isCrossable, movingDirection }) => {
        const isSymbolSide = movingDirection === directionSymbol;

        if (isCrossable && isSymbolSide) return SYMBOLS.success;
        if (!isCrossable && isSymbolSide) return SYMBOLS.fail;

        return SYMBOLS.blank;
      })
      .join(SYMBOLS.separator);

    return `${SYMBOLS.start} ${template} ${SYMBOLS.end}`;
  }
}

module.exports = TemplateMaker;
