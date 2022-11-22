const GameInit = {
  init() {
    GameInfo.position = 0;
    GameInfo.numberOfPlayGames = 1;
    GameInfo.gameResult = true;
  },
}

const GameInfo = {
  position: 0,
  numberOfPlayGames: 1,
  gameResult: true,
  size: 0,
  moving: 0,
  bridge: [],
}

module.exports = { GameInit, GameInfo }