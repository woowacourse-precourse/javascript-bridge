const BridgeSizeControll = require('./BridgeisValid');
const printinitMessage = require('./PrintInitMessage');

const gameStart = () => {
  printinitMessage();
  return BridgeSizeControll();
};

Object.freeze(gameStart);

module.exports = gameStart;
