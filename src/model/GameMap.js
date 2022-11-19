const { BRIDGE_GAME } = require('../constants/bridgeGameInfo');
const { o, x } = BRIDGE_GAME;

const REPEAT_COUNT = 3;

class GameMap {
  #CorretBridge; // 정답 맵
  #upperBridge = [];
  #lowerBridge = [];

  setCorretBridge(gameMap) {
    this.#CorretBridge = gameMap;
  }

  getCorretBridge() {
    return this.#CorretBridge;
  }

  drawBridge(moveCommand, userLocation) {
    const oxPattern = this.selectOXpattern(moveCommand, userLocation);
    const selectBridge = this.selectUpOrDownBridge(moveCommand, userLocation);

    selectBridge.push(` ${oxPattern} `); // 선택한 다리에 ox 넣기
    this.appendEmptySpace(selectBridge); // 안 선택한 다리에 공백 넣기

    return `[${this.#upperBridge.join('')}]\n[${this.#lowerBridge.join('')}]\n`;
    // 여기서 다리를 그리자
    // 사용자가 고른 다리면 O 또는 X 표시, 안 골랐으면 공백 3칸을 추가한다.
    // 유저가 0번째 위치거나 마지막 위치일 때는 다리를 연장하지 않는다.
    // 만약, 유저가 n번째 위치라면 다리를 연장 시켜야한다.
  }

  selectUpOrDownBridge(moveCommand) {}
  selectOXpattern(moveCommand, userLocation) {}
  appendDrawingBridge() {}
  appendEmptySpace(selectBridge) {}
}

module.exports = GameMap;
