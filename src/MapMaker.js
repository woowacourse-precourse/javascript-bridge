const { MAP_CHARACTERS } = require('./constants');

const MapMaker = {
  getMapHead(isFirstIndex) {
    return isFirstIndex ? MAP_CHARACTERS.START : '';
  },

  getMapTail(isLastIndex) {
    return isLastIndex ? MAP_CHARACTERS.END : '';
  },

  getMapCharacter(isCommandisCurrentPosition, result) {
    return isCommandisCurrentPosition
      ? MAP_CHARACTERS.USER_MOVE_RESULT[result] : MAP_CHARACTERS.WHITE_SPACE;
  },

  create(currentMoveCount, getUserInputResult) {
    const bridgeMap = [[], []].map(() => Array.from({ length: currentMoveCount + 1 }));

    return bridgeMap.map((el, pos) => el.map((_, idx) => {
      const { command, result } = getUserInputResult(idx);

      return `${this.getMapHead(idx === 0)}${this.getMapCharacter(MAP_CHARACTERS.COMMAND[command] === pos, result)}${this.getMapTail(idx === currentMoveCount)}`;
    })).map((el) => el.join(MAP_CHARACTERS.MIDDLE));
  },

};

module.exports = MapMaker;
