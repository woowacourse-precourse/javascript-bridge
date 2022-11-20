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
    this.view.readMoving((command) => {
      this.model.validateBridgeCommand(command);
      this.move(command);
    });
  }

  // 1. 입력받기 ✅
  // 2. 이번 command를 this.model.commandList에 push ✅
  // 3. map과 bridge를 비교 후 bridgeMap + 현재 칸 통과 여부 얻기 -> BridgeMap 클래스 ✅
  // 4. map 출력하기 = this.view.printMap(bridgeMap)

  // 5. 현재 칸 통과 실패 시 askToReplayGame 실행
  // 6. 현재 position(= 유저 다리 위치)이 bridge의 길이와 동일한지 판별 -> checkIsBridgeReached 이용
  //   - 동일 = 다리 건너기 성공
  //            askToReplayGame 실행
  //   - 동일 X = 더 가야할 칸이 있음
  //              MOVE 재귀 돌리기
  move(command) {
    this.model.addCommandToList = command;
    const { isPassed, bridgeMap } = this.model.getMovedResult();
    this.view.printMap(bridgeMap);
  }

  // 다리를 다 건넜는지 확인
  checkIsBridgeReached() {}

  // 게임 종료
  end() {}

  // 게임을 재시작 할 것인지 여부를 묻기
  askToReplayGame() {}

  // 사용자가 게임을 다시 시도할 때 사용하는 메서드
  retry() {}
};

module.exports = BridgeGame;
