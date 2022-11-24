const { BRIDGE_BLOCK } = require('../Constants');

function makeMapArrayOneSide(userPath, bridge, side) {
  return userPath.map((user, idx) => {
    if (user !== side) return ' ';
    if (user === bridge[idx]) return 'O';
    if (user !== bridge[idx]) return 'X';
  });
}

function makeMapArray(userPath, bridge) {
  const upside = makeMapArrayOneSide(userPath, bridge, BRIDGE_BLOCK.UP);
  const downside = makeMapArrayOneSide(userPath, bridge, BRIDGE_BLOCK.DOWN);
  return [downside, upside];
}

module.exports = { makeMapArray };
