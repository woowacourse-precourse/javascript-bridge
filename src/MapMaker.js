const MAP_CHARACTERS = {
  START: '[ ',
  MIDDLE: ' | ',
  END: ' ]',
  WHITE_SPACE: ' ',
  USER_MOVE_RESULT: {
    true: 'O',
    false: 'X',
  },
  COMMAND: {
    U: 0,
    D: 1,
  },
};

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
    }));
  },

};

module.exports = MapMaker;
