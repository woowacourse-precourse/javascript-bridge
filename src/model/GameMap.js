const { BRIDGE_GAME } = require('../constants/bridgeGameInfo');
const { o, x } = BRIDGE_GAME;

const REPEAT_COUNT = 3;

class GameMap {
  #CorretBridge; // 정답 맵
  #upperBridge = [];
  #lowerBridge = [];
  #fail = false;

  setCorretBridge(gameMap) {
    this.#CorretBridge = gameMap;
  }

  getCorretBridge() {
    return this.#CorretBridge;
  }

  isGameOver() {
    return this.#fail;
  }

  drawBridge(moveCommand, userLocation) {
    const oxPattern = this.selectOXpattern(moveCommand, userLocation);
    const selectBridge = this.selectUpOrDownBridge(moveCommand, userLocation);

    selectBridge.push(` ${oxPattern} `); // 선택한 다리에 ox 넣기
    this.appendEmptySpace(selectBridge); // 안 선택한 다리에 공백 넣기

    return `[${this.#upperBridge.join('')}]\n[${this.#lowerBridge.join('')}]\n`;
    // 사용자가 고른 다리면 O 또는 X 표시, 안 골랐으면 공백 3칸을 추가한다.
    // 유저가 0번째 위치거나 마지막 위치일 때는 다리를 연장하지 않는다.
    // 만약, 유저가 n번째 위치라면 다리를 연장 시켜야한다.
  }

  selectUpOrDownBridge(moveCommand) {
    // 패턴을 넣을 다리가 위쪽 다리인지 아래쪽 다리인지 선택
    const { up } = BRIDGE_GAME;
    if (moveCommand === up) {
      return this.#upperBridge;
    }
    return this.#lowerBridge;
  }

  selectOXpattern(moveCommand, userLocation) {
    const isPossibleNext = this.#CorretBridge[userLocation] === moveCommand;
    if (isPossibleNext) {
      return o;
    }
    this.#fail = true; // 나중에 user 클래스로 옮겨야 될 것 같은..?
    return x;
  }

  appendDrawingBridge() {}

  appendEmptySpace(selectBridge) {
    // 선택하지 않은 다리에 공백 추가하기
    if (selectBridge !== this.#upperBridge) {
      this.#upperBridge.push(' '.repeat(REPEAT_COUNT));
      return;
    }
    this.#lowerBridge.push(' '.repeat(REPEAT_COUNT));
  }
}

module.exports = GameMap;
