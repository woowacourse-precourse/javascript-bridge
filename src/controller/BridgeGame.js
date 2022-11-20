const GameCtrl = require('./GameCtrl');

const BridgeGame = class extends GameCtrl {
  constructor(view, model) {
    super();
    this.view = view;
    this.model = model;
  }

  start() {
    this.view.printGameStart();
    this.gameProcess();
  }

  gameProcess() {
    this.view.readBridgeSize((bridgeSize) => {
      try {
        bridgeSize = parseInt(bridgeSize);
        this.model.validateBridgeSize(bridgeSize);
        this.model.createBridge(bridgeSize);
        this.getUserCommand();
      } catch (error) {
        this.view.printErrorMessage(error.message);
        this.gameProcess(bridgeSize);
      }
    });
  }

  getUserCommand() {
    this.view.readMoving((command) => {
      try {
        this.model.validateBridgeCommand(command);
        this.move(command);
      } catch (error) {
        this.view.printErrorMessage(error.message);
        this.getUserCommand();
      }
    });
  }

  // 1. 입력받기 ✅
  // 2. 이번 command를 this.model.commandList에 push ✅
  // 3. map과 bridge를 비교 후 bridgeMap + 현재 칸 통과 여부 얻기 -> BridgeMap 클래스 ✅
  // 4. map 출력하기 = this.view.printMap(bridgeMap) ✅

  // 5. 현재 칸 통과 실패시 -> 게임을 재시작하거나 종료 여부 묻기
  //    -> askToReplayGame 실행 ✅
  move(command) {
    this.model.addCommandToList = command;
    const { isPassed, bridgeMap } = this.model.getMovedResult;
    this.view.printMap(bridgeMap);

    const isGameSuccess = this.model.getIsGameSuccess(bridgeMap);

    if (!isPassed) return this.askToReplayGame({ bridgeMap, isGameSuccess });
    if (isGameSuccess) return this.end({ bridgeMap, isGameSuccess });

    return this.getUserCommand();
  }

  // 게임을 재시작 할 것인지 여부를 묻기
  askToReplayGame({ bridgeMap, isGameSuccess }) {
    this.view.readGameCommand((replayCommand) => {
      try {
        this.model.validateBridgeReplayCommand(replayCommand);
        this.quitOrRetryByCommand({ replayCommand, bridgeMap, isGameSuccess });
      } catch (error) {
        this.view.printErrorMessage(error.message);
        this.askToReplayGame({ bridgeMap, isGameSuccess });
      }
    });
  }

  quitOrRetryByCommand({ replayCommand, bridgeMap, isGameSuccess }) {
    if (replayCommand === 'R') return this.retry();
    return this.end({ bridgeMap, isGameSuccess });
  }

  // 게임 종료 = Q
  end({ bridgeMap, isGameSuccess }) {
    const result = this.model.makeBridgeGameResult({ bridgeMap, isGameSuccess });
    this.view.printResult(result);
  }

  // 사용자가 게임을 다시 시도할 때 사용하는 메서드 = R
  retry() {
    this.model.setStateToReplay();
    this.getUserCommand();
  }
};

module.exports = BridgeGame;
