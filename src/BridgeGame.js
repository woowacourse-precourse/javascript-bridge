const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { RETRY, UP, STATUS_SUCCESS, STATUS_FAIL, STATUS_FINISH } = require('./constant/constants');
const { readMoving, readBridgeSize, readGameCommand } = require('./ui/InputView');
const OutputView = require('./ui/OutputView');
const { printMap, printResult, printStart } = require('./ui/OutputView');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  #bridgeString;
  #userInputString;
  #try; //총 시도 횟수
  #round; //현재 사용자의 입력 칸 수
  #upperBridge;
  #lowerBridge;

  constructor() {
    this.#bridgeString = '';
    this.#userInputString = '';
    this.#try = 1;
    this.#round = 0;
    this.#upperBridge = [];
    this.#lowerBridge = [];
  }

  start() {
    printStart();
    readBridgeSize(this.bridgeSetting);
  }

  bridgeSetting = (input) => {
    this.#bridgeString = makeBridge(input, generate);
    readMoving(this.check);
  };

  check = (input) => {
    this.#userInputString += input;
    console.log(
      `round : ${this.#round}, bridge: ${this.#bridgeString}, userInput : ${this.#userInputString}`
    );
    this.move();
    const status = this.checkStatus(this.#round, this.#bridgeString, this.#userInputString);
    printMap(this.#upperBridge, this.#lowerBridge);
    this.doAfterCheck(status);
  };

  doAfterCheck = (status) => {
    switch (status) {
      case STATUS_SUCCESS:
        this.#round += 1;
        readMoving(this.check);
        break;
      case STATUS_FAIL:
        this.askRetry();
        break;
      case STATUS_SUCCESS:
        //TODO 총 시도 횟수, 성공 여부 보여주기
        // printResult(STATUS_SUCCESS, this.#try);
        OutputView.printResult(this.#upperBridge, this.#lowerBridge, this.#try);
        break;
    }
  };

  askRetry = () => {
    readGameCommand((input) => {
      if (input === RETRY) {
        this.#round = 0;
        this.#try += 1;
        this.#userInputString = '';
        this.retry();
        readMoving(this.check);
      } else {
        // printResult(STATUS_FAIL, this.#try);
      }
    });
  };

  move() {
    //n번째 round에서 bridgeString과 userInputString을 보고 다리 현황 만들기
    if (this.#bridgeString[this.#round] === this.#userInputString[this.#round]) {
      this.pushO(this.#upperBridge, this.#lowerBridge, this.#bridgeString[this.#round]);
    } else {
      this.pushX(this.#upperBridge, this.#lowerBridge, this.#bridgeString[this.#round]);
    }
  }

  pushO(bridge1, bridge2, uOrD) {
    if (uOrD === UP) {
      bridge1.push('o');
      bridge2.push('n');
    } else {
      bridge1.push('n');
      bridge2.push('o');
    }
  }

  pushX(bridge1, bridge2, uOrD) {
    if (uOrD === UP) {
      bridge1.push('n');
      bridge2.push('x');
    } else {
      bridge1.push('x');
      bridge2.push('n');
    }
  }

  checkStatus(round, bridgeString, userInputString) {
    const total_round = bridgeString.length;
    console.log(
      `checkStatus... round : ${round}, total_round : ${total_round}, upper : ${
        this.#upperBridge
      }, lower : ${this.#lowerBridge}, userInput : ${userInputString}`
    );
    if (userInputString[round] !== bridgeString[round]) {
      return STATUS_FAIL;
    } else if (this.#upperBridge.length === total_round) {
      return STATUS_FINISH;
    } else {
      return STATUS_SUCCESS;
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    //bridge 초기화
    this.#upperBridge = [];
    this.#lowerBridge = [];
  }
}

module.exports = BridgeGame;
