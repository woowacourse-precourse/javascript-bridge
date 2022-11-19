const BridgeGame = require('./BridgeGame');
const { readBridgeSize, readMoving, readGameCommand, exit } = require('./InputView');
const { printMap, printResult } = require('./OutputView');
const { isPlayerPassed, isPlayerCleared } = require('./Utils/checkPlayerStatus');
const { INPUT_RETRY } = require('./Constants/InputValues');

class BridgeController {
  #Game;

  constructor() {
    this.#Game = new BridgeGame();
  }

  /**
   * 뷰에 생성될 다리의 길이 입력을 요청하는 메서드
   */
  getBridge = () => {
    readBridgeSize(this.sendBridge);
  };

  /**
   * 모델에 입력받은 다리의 길이를 전달하는 메서드
   */
  sendBridge = (size, isError) => {
    if (isError) exit();
    this.#Game.initializeBridge(size);
    this.getMove();
  };

  /**
   * 뷰에 이동 입력을 요청하는 메서드
   */
  getMove = () => {
    readMoving(this.sendMove);
  };

  /**
   * 모델에 입력받은 이동 입력을 전달하는 메서드
   */
  sendMove = (moveInput, isError) => {
    if (isError) exit();
    this.#Game.move(moveInput);
    this.sendOutputRequestToModel();
  };

  /**
   * 생성된 게임 정보와 입력을 비교하여 모델에 값 변경을 요청하는 메서드
   */
  sendOutputRequestToModel = () => {
    const { bridge } = this.#Game.getStatus();
    const input = this.#Game.getStatus().Input;
    const isPassed = isPlayerPassed(input[input.length - 1], bridge[input.length - 1]);
    const isCleared = isPlayerCleared(bridge.length, input.length, isPassed);
    this.#Game.setMoveOutput(isPassed, isCleared);
    this.sendOutputRequestToView();
  };

  /**
   * 변경된 모델 값을 바탕으로 뷰에 현재 상황 출력을 요청하는 메서드
   */
  sendOutputRequestToView = () => {
    const { output } = this.#Game.getStatus();
    printMap(output);
    this.checkMoveOption();
  };

  /**
   * 게임 진행을 관리하는 메서드
   */
  checkMoveOption = () => {
    const { isPassed, isCleared } = this.#Game.getStatus();
    if (isPassed) this.getMove();
    if (!isPassed) this.getCommand();
    if (isCleared) this.finishControl();
  };

  /**
   * 뷰에 종료, 재시작 여부를 묻는 입력을 요청하는 메서드
   */
  getCommand = () => {
    readGameCommand(this.checkGameOption);
  };

  /**
   * 입력받은 값을 바탕으로 게임을 종료, 재시작시키는 메서드
   */
  checkGameOption = (command, isError) => {
    if (isError) exit();
    const { count, isCleared, output } = this.#Game.getStatus();
    if (command === INPUT_RETRY.restart) {
      this.#Game.retry();
      this.getMove();
    }
    if (command === INPUT_RETRY.quit) {
      printResult(count, isCleared, output);
      exit();
    }
  };

  /**
   * 뷰에 최종 결과 출력을 요청하는 메서드
   */
  finishControl = () => {
    const { count, isCleared, output } = this.#Game.getStatus();
    printResult(count, isCleared, output);
    exit();
  };
}

// FOR TEST!!
// const controller = new BridgeController();
// controller.getBridge();

module.exports = BridgeController;
