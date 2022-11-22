/**
 * @param {number} index
 * @param {import("../BridgeGame").Result} result
 * @returns {boolean}
 */
const isLastMoveAndGameOver = (index, result) =>
  index === result.status.moveCount - 1 && result.flag === 'GAME_OVER';

const checkBridgeStatus = (index, result) => {
  if (isLastMoveAndGameOver(index, result)) {
    return 'X';
  }
  return 'O';
};

const moveToUp = (maps, index, result) => {
  maps[0].push(checkBridgeStatus(index, result));
  maps[1].push(' ');
};

const moveToDown = (maps, index, result) => {
  maps[0].push(' ');
  maps[1].push(checkBridgeStatus(index, result));
};

/**
 * @param {import("../BridgeGame").Result} result
 * @returns {Array<string[], string[]>}
 */
const createMaps = (result) =>
  result.status.movedRoutes.reduce(
    (acc, route, index) => {
      const maps = [...acc];

      if (route === 'U') moveToUp(maps, index, result);
      if (route === 'D') moveToDown(maps, index, result);

      return maps;
    },
    [[], []],
  );

module.exports = createMaps;
