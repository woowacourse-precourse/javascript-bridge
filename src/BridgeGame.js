const { COMMAND_VALUE } = require("./constants/Constant");

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
      userMoveArray.push(1);
    } else if (moveKey === COMMAND_VALUE.DOWN) {
      userMoveArray.push(0);
    }
    this.userMoveArray = userMoveArray;
    return userMoveArray;
  }

  compareMove(bridge, userMoveArray) {
    this.userMoveArray = userMoveArray;
    for (let i = this.userMoveArray.length - 1; i < bridge.length; i++) {
      if (bridge[i] === this.userMoveArray[i]) {
        if (bridge.length === this.userMoveArray.length) {
          return "allRight";
        }
        return "right";
      }
      return "wrong";
    }
  }
  getMap(userMoveArray) {
    this.userMoveArray = userMoveArray;
    return this.userMoveArray;
  }

  retry(retryOrCloseKey) {
    if (retryOrCloseKey === COMMAND_VALUE.RETRY) {
      return 1;
    } else if (retryOrCloseKey === COMMAND_VALUE.QUIT) {
      return 0;
    }
  }
}

module.exports = BridgeGame;
