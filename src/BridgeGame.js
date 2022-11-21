const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { RETRY, UP, STATUS_SUCCESS, STATUS_FAIL, STATUS_FINISH } = require('./constant/constants');
const { readMoving, readBridgeSize, readGameCommand } = require('./ui/InputView');
const OutputView = require('./ui/OutputView');

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
  #isAnswerList; //정답 여부 배열

  constructor() {
    this.#bridgeString = '';
    this.#userInputString = '';
    this.#try = 1;
    this.#round = 0;
    this.#isAnswerList = [];
  }

  start() {
    OutputView.printStart();
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
    this.move(this.#bridgeString[this.#round], this.#userInputString[this.#round]);
    console.log(this.#isAnswerList);
    const status = this.checkStatus(
      this.#bridgeString[this.#round],
      this.#userInputString[this.#round]
    );
    OutputView.printMap(this.#isAnswerList, this.#userInputString);
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
      case STATUS_FINISH:
        //TODO 총 시도 횟수, 성공 여부 보여주기
        OutputView.printResult(this.#isAnswerList, this.#userInputString, this.#try);
        break;
    }
  };

  askRetry = () => {
    readGameCommand((input) => {
      if (input === RETRY) {
        this.retry();
      } else {
        // printResult(STATUS_FAIL, this.#try);
        OutputView.printResult(this.#isAnswerList, this.#userInputString, this.#try);
      }
    });
  };

  move(answerChar, userChar) {
    //n번째 round에서 bridgeString과 userInputString을 보고 다리 현황 만들기
    if (answerChar === userChar) {
      this.#isAnswerList.push(true);
    } else {
      this.#isAnswerList.push(false);
    }
  }

  checkStatus(answerChar, userChar) {
    const total_round = this.#bridgeString.length;
    console.log(
      `checkStatus... round : ${this.#round}, total_round : ${total_round}, userInput : ${
        this.#userInputString
      }`
    );
    if (answerChar !== userChar) {
      return STATUS_FAIL;
    } else if (this.#isAnswerList.length === total_round) {
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
    this.#round = 0;
    this.#try += 1;
    this.#userInputString = '';
    this.#isAnswerList = [];
    readMoving(this.check);

    // this.#upperBridge = [];
    // this.#lowerBridge = [];
  }
}

module.exports = BridgeGame;
