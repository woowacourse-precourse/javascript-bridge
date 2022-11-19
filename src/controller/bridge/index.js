const { GAME_MESSAGE } = require('../../constants');
const GameCtrl = require('../GameCtrl');

const BridgeCtrl = class extends GameCtrl {
  constructor(view, model) {
    super();
    this.view = view;
    this.model = model;
  }

  // 게임 진행
  // 1. 다리 길이 입력받기 ✅
  // 2. 다리 생성하기
  gameProcess() {
    this.view.output(GAME_MESSAGE.start);
    this.view.input(GAME_MESSAGE.input_size, (bridgeSize) => {
      this.model.createBridge(Number(bridgeSize));
    });
  }

  // 게임 종료
  end() {}

  // 게임을 재시작 할 것인지 여부를 묻기
  askToReplayGame() {}
};

module.exports = BridgeCtrl;
