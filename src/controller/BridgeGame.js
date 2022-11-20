const GameCtrl = require('./GameCtrl');

const BridgeGame = class extends GameCtrl {
  constructor(view, model) {
    super();
    this.view = view;
    this.model = model;
  }

  start() {
    this.view.printGameStart();
    this.view.readBridgeSize((bridgeSize) => this.gameProcess(bridgeSize));
  }

  gameProcess(bridgeSize) {
    this.model.createBridge(parseInt(bridgeSize));
    this.getUserCommand();
  }

  getUserCommand() {
    this.view.readMoving((command) => {
      this.model.validateBridgeCommand(command);
      this.move(command);
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

    if (!isPassed) return this.askToReplayGame();

    const isGameEnd = this.model.getGameEnd;
    if (isGameEnd) return this.end();

    return this.getUserCommand();
  }

  // 게임을 재시작 할 것인지 여부를 묻기
  askToReplayGame() {
    this.view.readGameCommand((replayCommand) => {
      this.model.validateBridgeCommand(replayCommand);
      this.quitOrRetryByCommand(replayCommand);
    });
  }

  quitOrRetryByCommand(replayCommand) {
    if (replayCommand === 'R') return this.retry();
    return this.end();
  }

  // 게임 종료 = Q
  end() {}

  // 사용자가 게임을 다시 시도할 때 사용하는 메서드 = R
  retry() {}
};

module.exports = BridgeGame;
