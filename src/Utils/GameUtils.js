const { BRIDGE_REQUIREMENTS, USER_INPUT_CODE, MOVEMENT_LOG_CODE, OUTPUT_SYMBOLS } = require('../constants');

class GameUtils {
  static courseToForm(course) {
    const result = [];
    result.push(GameUtils.#getUpperRow(course));
    result.push(GameUtils.#getLowerRow(course));
    return result;
  };

  static #getUpperRow(course) {
    const upperRow = [];
    course.forEach(trace => {
      if(trace === MOVEMENT_LOG_CODE.PASSED.UPPER) return upperRow.push(OUTPUT_SYMBOLS.PASSED);
      if(trace === MOVEMENT_LOG_CODE.FAILED.UPPER) return upperRow.push(OUTPUT_SYMBOLS.FAILED);
      upperRow.push(' ');
    });
    let result = `[ ${upperRow.join(` ${OUTPUT_SYMBOLS.PARTITION} `)} ]`;
    return result;
  };

  static #getLowerRow(course) {
    const lowerROW = [];
    course.forEach(trace => {
      if(trace === MOVEMENT_LOG_CODE.PASSED.LOWER) return lowerROW.push(OUTPUT_SYMBOLS.PASSED);
      if(trace === MOVEMENT_LOG_CODE.FAILED.LOWER) return lowerROW.push(OUTPUT_SYMBOLS.FAILED);
      lowerROW.push(' ');
    });
    let result = `[ ${lowerROW.join(` ${OUTPUT_SYMBOLS.PARTITION} `)} ]`;
    return result;
  };
}

module.exports = GameUtils;