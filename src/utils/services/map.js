const { MAP_ROW_MESSAGE } = require('../constants/GameSystem');
const BridgeMaker = require('../../BridgeMaker');
const BridgeRandomNumberGenerator = require('../../BridgeRandomNumberGenerator');

const getMakeBridge = (size) => {
  return BridgeMaker.makeBridge(
    size,
    BridgeRandomNumberGenerator.generate,
  );
}

const getMapRowMessage = (row) => {
  return `${MAP_ROW_MESSAGE.open} ${row.join(MAP_ROW_MESSAGE.join)} ${MAP_ROW_MESSAGE.close}`
}

module.exports = {
  getMakeBridge,
  getMapRowMessage
};
