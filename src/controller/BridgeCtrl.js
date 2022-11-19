const GameCtrl = require('./GameCtrl');

const BridgeCtrl = class extends GameCtrl {
  constructor(view, model) {
    super();
    this.view = view;
    this.model = model;
  }

  // start
  // 1. 다리 길이 입력받기 ✅
  // 2. 다리 생성하기 ✅
  start() {
    this.view.printGameStart();
    this.view.readBridgeSize((bridgeSize) => this.gameProcess(bridgeSize));
  }

  gameProcess(bridgeSize) {
    this.model.createBridge(parseInt(bridgeSize));
    this.view.readMoving((command) => this.model.move(command));
  }

  // 게임 종료
  end() {}

  // 게임을 재시작 할 것인지 여부를 묻기
  askToReplayGame() {}
};

module.exports = BridgeCtrl;
