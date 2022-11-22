const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { RETRY, STATUS_SUCCESS, STATUS_FAIL, STATUS_FINISH } = require('./constant/constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
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

  get bridgeString() {
    return this.#bridgeString;
  }

  set bridgeString(str) {
    this.#bridgeString = str;
  }

  get userInputString() {
    return this.#userInputString;
  }

  get isAnswerList() {
    return this.#isAnswerList;
  }

  get try() {
    return this.#try;
  }

  plusRound = () => {
    this.#round += 1;
  };
  /**
   * number만큼 bridge를 생성하는 메서드
   * @param {number} bridgeSize 
   */
  bridgeSetting = (bridgeSize) => {
    this.#bridgeString = makeBridge(bridgeSize, generate).join('');
  };
  /**
   *
   * @param {char} userChar
   * @returns
   */
  check = (userChar) => {
    this.#userInputString += userChar;
    this.move(this.#bridgeString[this.#round], this.#userInputString[this.#round]);
    return this.checkStatus(this.#bridgeString[this.#round], this.#userInputString[this.#round]);
  };
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {char} answerChar
   * @param {char} userChar
   * answerList에 해당 칸을 맞췄는지 여부를 추가한다
   */
  move(answerChar, userChar) {
    if (answerChar === userChar) {
      this.#isAnswerList.push(true);
    } else {
      this.#isAnswerList.push(false);
    }
  }
  /**
   * 해당 라운드의 결과가 O인지, X인지, 아니면 게임이 종료되었는지의 상태를 리턴하는 메서드
   * @param {char} answerChar
   * @param {char} userChar
   * @returns {string} STATUS
   * 
   */
  checkStatus(answerChar, userChar) {
    const total_round = this.#bridgeString.length;
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
   * 
   */
  retry() {
    //bridge 초기화
    this.#round = 0;
    this.#try += 1;
    this.#userInputString = '';
    this.#isAnswerList = [];
  }
}

module.exports = BridgeGame;
