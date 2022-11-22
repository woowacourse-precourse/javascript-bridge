const { printError } = require('../IO/OutputView');
const { MESSAGE } = require('./Constant');

class Validator {
  /**
   * @param {Number} bridgeSize
   * @desc 다리의 길이를 검증하는 메서드
   */
  static bridgeSize(bridgeSize) {
    const isNumber = bridgeSize.match(/^[0-9]+$/g);
    if (!isNumber) printError(MESSAGE.ERROR_INPUT_NUM);
    if (bridgeSize < 3 || bridgeSize > 20)
      printError(MESSAGE.ERROR_INPUT_RANGE);
  }

  /**
   * @param {String} gameCommand
   * @desc 게임을 종료,재시작 커맨드 검증하는 메서드
   */
  static gmaeCommand(gameCommand) {
    if (gameCommand !== 'Q' && gameCommand !== 'R')
      printError(MESSAGE.ERROR_INPUT_COMMAND);
  }

  /**
   * @param {String} moving
   * @desc 사용자의 이동 커맨드 검증 메서드
   */
  static moving(moving) {
    if (moving !== 'U' && moving !== 'D')
      printError(MESSAGE.ERROR_INPUT_MOVING);
  }
}

module.exports = Validator;
