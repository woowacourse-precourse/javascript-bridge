const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const InputValidate = require("./InputValidate");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

/**
 * 어플리케이션 최상단 구현부
 * InputView 함수의 콜백으로 해당 입력에 대한 다음 분기점 함수를 파라미터로 전달
 */
class App {
  /**
   * bridgeGame 초기화 및 함수 재귀 호출을 위한 this 바인딩 
   * */
  constructor() {
    this.bridgeGame = null;
    this.roundStartBranch = this.roundStartBranch.bind(this);
    this.roundInputBranch = this.roundInputBranch.bind(this);
    this.roundRetryBranch = this.roundRetryBranch.bind(this);
  }

  /**
   * 어플리케이션 시작 시점
   * InputView.readBridgeSize로 다리 길이를 입력받고 roundStartBranch를 실행하도록 파라미터로 전달
   */
  play() {
    OutputView.printString("다리 건너기 게임을 시작합니다.\n");
    InputView.readBridgeSize(this.roundStartBranch);
  }

  /**
   * 다리 길이의 입력값 유효성 검증에 따른 분기점
   * @param {char} bridgeLengthInput 문자열 타입인 3~20 범위내 수
   * 유효성 통과: 라운드로 진입하여 readMoving로 위/아래 이동할 방향을 입력, roundInputBranch를 실행하도록 파라미터로 전달
   * 유효성 실패: 에러 메세지 출력 후 InputView.readBridgeSize 재진입, 다리 길이 재입력
   */
  roundStartBranch(bridgeLengthInput) {
    try {
      InputValidate.validateBridgeLength(bridgeLengthInput);
      this.bridgeGame = new BridgeGame(BridgeMaker.makeBridge(parseInt(bridgeLengthInput), BridgeRandomNumberGenerator.generate));
      InputView.readMoving(this.roundInputBranch);
    } catch(e) {
      MissionUtils.Console.print('\n' + e.message);
      InputView.readBridgeSize(this.roundStartBranch);
    }
  }

  /**
   * 방향의 입력값 유효성 검증에 따른 분기점
   * @param {char} directionInput 해당 라운드에서 시도할 위/아래 방향 입력값, 'U' 혹은 'D'
   * 유효성 통과: BridgeGameController.checkRoundResult로 라운드 결과값을 받아 roundResultBranch로 전달
   * 유효성 실패: 에러 메세지 출력 후 InputView.readMoving 재진입, 해당 라운드 방향 재입력
   */
  roundInputBranch(directionInput) {
    try {
      InputValidate.validateDirection(directionInput);
      this.bridgeGame.move(directionInput);
      this.roundResultBranch();
    } catch(e) {
      MissionUtils.Console.print('\n' + e.message);
      InputView.readMoving(this.roundInputBranch);
    }
  }

  /**
   * 해당 라운드 결과에 따른 분기점
   * @param {number} roundResult 해당 라운드 결과값
   * 해당 라운드 성공(도착): 결과 출력 후 어플리케이션 종료
   * 해당 라운드 성공(미도착): InputView.readMoving로 다음 라운드 진행
   * 해당 라운드 실패: InputView.readGameCommand에서 재도전 여부를 입력받고 roundRetryBranch 실행
   */
  roundResultBranch() {
    OutputView.printMap(this.bridgeGame.stateToString());
    if(this.bridgeGame.isArrived()) {
      OutputView.printResult(this.bridgeGame.stateToString(), this.bridgeGame.isArrived(), this.bridgeGame.getTry());
    } else if(this.bridgeGame.getLastRoundResult()) {
      InputView.readMoving(this.roundInputBranch);
    } else {
      InputView.readGameCommand(this.roundRetryBranch);
    }
  }

  /**
   * 재도전 시도 여부 입력값 유효성에 따른 분기점
   * @param {char} retryInput 재도전 여부 입력값, 
   * 유효성 통과: terminateBranch로 재도전 여부 입력값 전달
   * 유효성 실패: 에러 메세지 출력 후 InputView.readGameCommand 재진입, 재도전 여부 재입력
   */
  roundRetryBranch(retryInput) {
    try {
      InputValidate.validateRetry(retryInput);
      this.terminateBranch(retryInput);
    } catch(e) {
      MissionUtils.Console.print('\n' + e.message);
      InputView.readGameCommand(this.roundRetryBranch);
    }
  }

  /**
   * 재도전 여부에 따른 분기점
   * @param {char} retryInput 재도전 여부 입력값, 'R' 혹은 'Q'
   * 'Q'(종료): 현재까지의 게임 결과를 출력 후 어플리케이션 종료
   * 'R'(재도전): bridgeGame의 현재까지 기록을 초기화하고 readMoving으로 돌아감
   */
  terminateBranch(retryInput) {
    if (retryInput == 'Q') {
      OutputView.printResult(this.bridgeGame.stateToString(), this.bridgeGame.isArrived(), this.bridgeGame.getTry());
      return null;
    }
    this.bridgeGame.retry();
    InputView.readMoving(this.roundInputBranch);
  }
}

const app = new App();
app.play();

module.exports = App;
