const OutputView = require('../views/OutputView');
const Validation = require('./Validation');

/** 예외에 대한 책임을 갖는 객체 */
const ExceptionHandler = {
  /**
   * 유효성을 검사한다.
   *
   * @param {*} source 검사할 대상
   * @param {READ_TYPE} validateType 검사 타입
   * @returns
   */
  tryValidate(source, validateType) {
    const { isValidation, errorMessage } = Validation[`validate${validateType}`](source);
    if (isValidation) return true;

    try {
      throw errorMessage;
    } catch (error) {
      OutputView.printError(error);
      OutputView.addNewLine();
      return false;
    }
  },
};

module.exports = ExceptionHandler;
