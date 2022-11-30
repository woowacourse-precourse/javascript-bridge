const { COMMAND_VALUE, GAME_RESOURCE } = require("./constants/Constant");

class BridgeGame {
  constructor(userMoveArray, gameTryCount) {
    this.userMoveArray = userMoveArray;
    this.gameTryCount = gameTryCount;
  }

  getCount(gameTryCount) {
    this.gameTryCount = gameTryCount;
    return this.gameTryCount;
  }

  plusCount() {
    this.gameTryCount += 1;
    return this.gameTryCount;
  }

  move(moveKey, userMoveArray) {
    if (moveKey === COMMAND_VALUE.UP) {
      userMoveArray.push("U");
    } else if (moveKey === COMMAND_VALUE.DOWN) {
      userMoveArray.push("D");
    }
    this.userMoveArray = userMoveArray;
    return userMoveArray;
  }

  compareMove(bridge, userMoveArray) {
    this.userMoveArray = userMoveArray;
    for (let i = this.userMoveArray.length - 1; i < bridge.length; i++) {
      if (bridge[i] === this.userMoveArray[i]) {
        if (bridge.length === this.userMoveArray.length) {
          return GAME_RESOURCE.ALLRIGHT;
        }
        return GAME_RESOURCE.RIGHT;
      }
      return GAME_RESOURCE.WRONG;
    }
  }

  getMap(userMoveArray) {
    this.userMoveArray = userMoveArray;
    return this.userMoveArray;
  }

  retry(retryOrCloseKey) {
    if (retryOrCloseKey === COMMAND_VALUE.RETRY) return 1;
    if (retryOrCloseKey === COMMAND_VALUE.QUIT) return 0;
  }
}

module.exports = BridgeGame;
