const { MAP, COMMAND } = require('../utils/constants/game');

const isFirstPosition = (historyItem) => !(historyItem.position > 0);

class BridgeMap {
  #map;
  #history;

  constructor(history) {
    this.#map = {
      upPrint: '',
      downPrint: '',
    };
    this.#history = history;
  }

  getMap() {
    this.drawMap();
    return this.#map;
  }

  drawMap() {
    this.drawMapStart();
    this.drawMapMove();
    this.drawMapEnd();
  }

  draw(toUpPrint, toDownPrint) {
    this.#map = {
      upPrint: this.#map.upPrint + toUpPrint,
      downPrint: this.#map.downPrint + toDownPrint,
    };
  }

  drawMapStart() {
    this.draw(MAP.LEFT_BRACKET, MAP.LEFT_BRACKET);
  }

  drawMapEnd() {
    this.draw(MAP.RIGHT_BRACKET, MAP.RIGHT_BRACKET);
  }

  drawMapMoveIcon(historyItem) {
    if (historyItem.upOrDown === COMMAND.MOVE.UP) {
      this.draw(MAP.MOVE_RESULT_ICON(historyItem.isSuccess), MAP.BLANK);
    } else {
      this.draw(MAP.BLANK, MAP.MOVE_RESULT_ICON(historyItem.isSuccess));
    }
  }

  drawMapDivider() {
    this.draw(MAP.DIVIDER, MAP.DIVIDER);
  }

  drawMapMove() {
    this.#history.forEach((item) => {
      if (!isFirstPosition(item)) {
        this.drawMapDivider();
      }
      this.drawMapMoveIcon(item);
    });
  }
}

module.exports = { BridgeMap };
