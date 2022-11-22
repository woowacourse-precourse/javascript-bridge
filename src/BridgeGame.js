//다리 건너기 게임을 관리하는 클래스
const MissionUtils = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const InputView = require('./InputView');

const PLAYING = 'playing...';
const SUCCESS = 'success';
const GAME_END = 'game end';
const FAILURE = 'failure';

class BridgeGame {
  #bridge = [];
  #bridgePrintString = ['', ''];
  #repeatReadMovingCount = 0;
  #resetGameCount = 0;

  constructor(bridge, count) {
    this.#bridge = bridge;
    this.#bridgePrintString = ['', ''];
    this.#resetGameCount = count;
  }

  //사용자가 칸을 이동할 때 사용하는 메서드
  move(movingUpDown = '') {
    this.afterReadMoving(movingUpDown);

    const ifAllFinish = this.#repeatReadMovingCount === this.#bridge.length - 1;
    const ifCorrect =
      movingUpDown === this.#bridge[this.#repeatReadMovingCount];

    return [this, this.nextAction(ifCorrect, ifAllFinish)];
  }

  nextAction(ifCorrect, ifAllFinish) {
    if (ifCorrect && !ifAllFinish) {
      this.#repeatReadMovingCount++;
      return PLAYING;
    }
    if (!ifCorrect) {
      return FAILURE;
    }
    if (ifAllFinish) {
      return this.success();
    }
  }

  success() {
    OutputView.printResult(
      SUCCESS,
      this.#bridgePrintString,
      this.#resetGameCount
    );
    return GAME_END;
  }

  afterReadMoving(movingUpDown = '') {
    let currentBridge = this.#bridge[this.#repeatReadMovingCount];
    //다리 출력
    this.#bridgePrintString = this.editBridgeString(
      movingUpDown,
      currentBridge,
      this.#bridgePrintString
    );
    OutputView.printMap(this.#bridgePrintString);
  }

  editBridgeString(movingUpDown = '', currentBridge, bridgePrintString) {
    bridgePrintString = this.addBridgeSeperator(bridgePrintString);
    if (movingUpDown === 'U') {
      bridgePrintString[1] += '   ';
      bridgePrintString[0] += this.addYesOrNo(movingUpDown, currentBridge);
    }
    if (movingUpDown === 'D') {
      bridgePrintString[0] += '   ';
      bridgePrintString[1] += this.addYesOrNo(movingUpDown, currentBridge);
    }
    return bridgePrintString;
  }

  addBridgeSeperator(bridgePrintString) {
    if (bridgePrintString[0] != '' || bridgePrintString[1] != '') {
      bridgePrintString[0] += '|';
      bridgePrintString[1] += '|';
    }
    return bridgePrintString;
  }

  addYesOrNo(movingUpDown = '', currentBridge) {
    if (movingUpDown === currentBridge) {
      return ' O ';
    }
    if (movingUpDown !== currentBridge) {
      return ' X ';
    }
  }

  //사용자가 게임을 다시 시도할 때 사용하는 메서드
  retry() {
    this.#bridgePrintString = ['', ''];
    this.#resetGameCount += 1;
    this.#repeatReadMovingCount = 0;
  }

  quit() {
    OutputView.printResult(
      FAILURE,
      this.#bridgePrintString,
      this.#resetGameCount
    );
  }
}

module.exports = BridgeGame;

