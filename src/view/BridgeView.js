const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validation = require('../util');
const { TYPE } = require('../constants');

class BridgeView {
  constructor() {
    this.input = InputView;
    this.output = OutputView;
  }

  /**
   * * 다리길이 입력값을 받아 유효성 검사 메서드로 전달하는 메서드
   * @param {function} printLength - Controller에서 실행할 콜백함수
   */
  getBridgeLength(printLength) {
    const validation = (length) => {
      this.inputValidation(length, printLength, TYPE.SIZE);
      this.getBridgeLength(printLength);
    };
    this.output.printStart();
    this.input.readBridgeSize(validation);
  }

  /**
   * 다리 진행방향 입력값을 받아 유효성 검사 메서드로 전달하는 메서드
   * @param {function} updateMove - Controller에서 실행할 콜백함수
   */
  getWhereToGo(updateMove) {
    const validation = (destination) => {
      this.inputValidation(destination, updateMove, TYPE.STEP);
    };
    this.input.readMoving(validation);
  }

  /**
   * 재시작 여부 입력값을 받아 유효성 검사 메서드로 전달하는 메서드
   * @param {function} getCommand - Controller에서 실행할 콜백함수
   */
  getWhatToDo(getCommand) {
    const validation = (command) => {
      this.inputValidation(command, getCommand, TYPE.RETRY);
    };
    this.input.readGameCommand(validation);
  }

  /**
   * * OutputView 객체로 map 배열을 전달합니다.
   * @param {string[][]} map 현재까지 이동한 다리의 상태 표현한 문자열배열
   */
  printMap(map) {
    this.output.printMap(map);
  }

  /**
   * * OutputView 객체로 파라미터를 전달합니다.
   * @param {boolean} isRight 사용자의 입력값과 다리 배열과의 정답 비교 결과값
   * @param {number} tryCount 현재까지 재시작한 횟수
   * @param {string[][]} map 현재까지 이동한 다리의 상태 표현한 문자열배열
   */
  printResult(isRight, tryCount, map) {
    this.output.printResult(isRight, tryCount, map);
  }

  /**
   * * OutputView 객체로 파라미터를 전달합니다.
   * @param {string} type 예외처리에 대한 타입 문자열
   */
  printError(type) {
    this.output.printError(type);
  }

  /**
   * * 유효성 검사에 문제가 없다면, callback 함수를 실행합니다.
   * * 유효성 검사에 문제가 있다면, printError 메서드를 실행합니다.
   * @param {string | number} input
   * @param {function} callback
   * @param {string} type
   */
  inputValidation(input, callback, type) {
    try {
      Validation[type](input);
      callback(input);
    } catch (errorType) {
      this.printError(errorType);
    }
  }
}

module.exports = BridgeView;
