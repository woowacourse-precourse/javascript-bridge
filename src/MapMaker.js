const { MAP_CHARACTERS } = require('./constants');

class MapMaker {
  #currentResultLength;

  #getUserInputResult;

  constructor(currentResultLength, getUserInputResult) {
    this.#currentResultLength = currentResultLength;
    this.#getUserInputResult = getUserInputResult;
    this.init();
  }

  static getMapHead(isFirstIndex) {
    return isFirstIndex ? MAP_CHARACTERS.START : '';
  }

  static getMapTail(isLastIndex) {
    return isLastIndex ? MAP_CHARACTERS.END : '';
  }

  static getMapCharacter(isCommandisCurrentPosition, result) {
    return isCommandisCurrentPosition
      ? MAP_CHARACTERS.USER_MOVE_RESULT[result] : MAP_CHARACTERS.WHITE_SPACE;
  }

  init = () => {
    this.bridgeMap = [[], []].map(() => Array.from({ length: this.#currentResultLength }));
  };

  create = () => {
    const bridgeMap = this.bridgeMap
      .map((el, pos) => el.map((_, idx) => {
        const { command, result } = this.#getUserInputResult(idx);

        return `${MapMaker.getMapHead(idx === 0)}${MapMaker.getMapCharacter(MAP_CHARACTERS.COMMAND[command] === pos, result)}${MapMaker.getMapTail(idx === this.#currentResultLength - 1)}`;
      }));

    return bridgeMap.map((el) => el.join(MAP_CHARACTERS.MIDDLE)).join('\n');
  };
}

module.exports = MapMaker;
