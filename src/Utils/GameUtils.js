const { MOVEMENT_LOG_CODE, OUTPUT_SYMBOLS } = require('../constants');

class GameUtils {
  static logToForm(log) {
    const result = [];
    result.push(GameUtils.#getUpperRow(log));
    result.push(GameUtils.#getLowerRow(log));
    return result;
  };

  static #getUpperRow(log) {
    const upperRow = [];
    log.forEach(trace => {
      if(trace === MOVEMENT_LOG_CODE.PASSED.UPPER) return upperRow.push(OUTPUT_SYMBOLS.PASSED);
      if(trace === MOVEMENT_LOG_CODE.FAILED.UPPER) return upperRow.push(OUTPUT_SYMBOLS.FAILED);
      upperRow.push(OUTPUT_SYMBOLS.BLANK);
    });
    let result = `[ ${upperRow.join(` ${OUTPUT_SYMBOLS.PARTITION} `)} ]`;
    return result;
  };

  static #getLowerRow(log) {
    const lowerROW = [];
    log.forEach(trace => {
      if(trace === MOVEMENT_LOG_CODE.PASSED.LOWER) return lowerROW.push(OUTPUT_SYMBOLS.PASSED);
      if(trace === MOVEMENT_LOG_CODE.FAILED.LOWER) return lowerROW.push(OUTPUT_SYMBOLS.FAILED);
      lowerROW.push(OUTPUT_SYMBOLS.BLANK);
    });
    let result = `[ ${lowerROW.join(` ${OUTPUT_SYMBOLS.PARTITION} `)} ]`;
    return result;
  };
}

module.exports = GameUtils;