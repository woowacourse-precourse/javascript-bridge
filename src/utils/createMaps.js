/**
 * @param {number} index
 * @param {import("../BridgeGame").Flag} result
 * @returns {boolean}
 */
const isLastAndGameOver = (index, result) =>
  index === result.status.curMoveCount - 1 && result.flag === 'GAME_OVER';

/**
 * @param {import("../BridgeGame").Flag} result
 * @returns {Array<string[], string[]>}
 */
const createMaps = (result) => {
  /** @type {Array<string[], string[]>} */
  const initMaps = [[], []];
  const { status } = result;

  const maps = status.movedRoutes.reduce((acc, route, index) => {
    const maps = [...acc];
    const UP = 0;
    const DOWN = 1;

    if (route === 'U') {
      if (isLastAndGameOver(index, result)) maps[UP].push('X');
      else maps[UP].push('O');
      maps[DOWN].push(' ');
    }

    if (route === 'D') {
      if (isLastAndGameOver(index, result)) maps[DOWN].push('X');
      else maps[DOWN].push('O');
      maps[UP].push(' ');
    }

    return maps;
  }, initMaps);

  return maps;
};

module.exports = createMaps;
