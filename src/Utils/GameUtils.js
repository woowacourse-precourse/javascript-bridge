const { BRIDGE_REQUIREMENTS } = require('../constants');

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
      if(trace === BRIDGE_REQUIREMENTS.UPPER_CODE) return upperRow.push(BRIDGE_REQUIREMENTS.PASSED_OUTPUT);
      if(trace === BRIDGE_REQUIREMENTS.UPPER_FAILED_CODE) return upperRow.push(BRIDGE_REQUIREMENTS.FAILED_OUTPUT);
      upperRow.push(' ');
    });
    let result = `[ ${upperRow.join(` ${BRIDGE_REQUIREMENTS.PARTITION} `)} ]`;
    return result;
  };

  static #getLowerRow(course) {
    const lowerROW = [];
    course.forEach(trace => {
      if(trace === BRIDGE_REQUIREMENTS.LOWER_CODE) return lowerROW.push(BRIDGE_REQUIREMENTS.PASSED_OUTPUT);
      if(trace === BRIDGE_REQUIREMENTS.LOWER_FAILED_CODE) return lowerROW.push(BRIDGE_REQUIREMENTS.FAILED_OUTPUT);
      lowerROW.push(' ');
    });
    let result = `[ ${lowerROW.join(` ${BRIDGE_REQUIREMENTS.PARTITION} `)} ]`;
    return result;
  };

  static #arrayToForm(row) {
    let form = '[ ';
  }
}

module.exports = GameUtils;