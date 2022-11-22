const { GAME_VALUES, INITIALIZE_VALUES } = require("../constants/constant");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const GameInfo = require("./GameInfo");

class UseGameInfo {
  static initializeGameInfo() {
    GameInfo.gameStat = [];
    GameInfo.moveBridge = [[], []];
    GameInfo.position = INITIALIZE_VALUES.initializedPosition;
    GameInfo.numberOfPlayGames += GAME_VALUES.counter;
    return true;
  }

  static isLastTurn = () => GameInfo.position !== GameInfo.bridgeSize - 1;

  static isFailure() {
    return (
      GameInfo.moveBridge[0]
        .concat(GameInfo.moveBridge[1])
        .includes(GAME_VALUES.mapValues[1])
    );
  }

  static isValidMove() {
    return GameInfo.bridge[GameInfo.position] === GameInfo.gameStat[GameInfo.position];
  }

  static pushMoveBridge(input) {
    GameInfo.moveBridge[
      GameInfo.indexingArray
        .indexOf(GameInfo.gameStat[GameInfo.position])
    ].push(input);
    GameInfo.moveBridge[
      (GameInfo.indexingArray
        .indexOf(GameInfo.gameStat[GameInfo.position]) + 1) % 2
    ].push(GAME_VALUES.blank);
  }
}

module.exports = UseGameInfo;